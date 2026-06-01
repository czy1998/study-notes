import React, { useState, useRef } from "react";

const omitEmpty = (params) => {
  if (!params || Object.prototype.toString.call(params) !== "[object Object]") {
    return {};
  }
  return Object.keys(params).reduce((pre, curr) => {
    if ([null, undefined, ""].includes(params[curr])) {
      return pre;
    }
    pre[curr] = params[curr];
    return pre;
  }, {});
};

const request = ({
  url,
  method = "GET",
  headers = {},
  params,
  data,
  onProgress = (e) => e,
  requestList,
}) => {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    // 进度事件
    xhr.upload.onprogress = onProgress;
    const urlParams = params
      ? new URLSearchParams(omitEmpty(params)).toString
      : "";
    xhr.open(method, `${url}${urlParams}`);
    Object.keys(omitEmpty(headers)).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
    xhr.onload = (e) => {
      // 若请求列表存在，请求完成后从列表中去除
      if (requestList) {
        const currentIndex = requestList.findIndex((item) => item === xhr);
        requestList.splice(currentIndex, 1);
      }
      resolve({
        data: e.target.response,
      });
    };
    // 发起请求后，向列表中添加
    requestList?.push(xhr);
  });
};

/** 切片大小10M */
const SIZE = 10 * 1024 * 1024;

const ProgressBar = ({ percentage }) => {
  return (
    <div
      style={{
        width: 200,
        height: 10,
        background: "lightgray",
        margin: 2,
        borderRadius: 6,
      }}
    >
      <div
        style={{
          height: "100%",
          background: "lightblue",
          borderRadius: 6,
          width: `${percentage}%`,
          transition: "all 0.3s",
        }}
      />
    </div>
  );
};

const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [hashPercentage, setHashPercentage] = useState(0);

  const hashRef = useRef();
  const workRef = useRef();
  const rqList = useRef([]);

  /**
   * 校验接口
   * @param {*} fileName
   * @param {*} fileHash
   * @returns
   */
  const verifyUpload = async (fileName, fileHash) => {
    const { data } = await request({
      url: "http://localhost:3021/verify",
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      data: JSON.stringify({
        fileName,
        fileHash,
      }),
    });
    return JSON.parse(data);
  };

  const calculateHash = (fileChunkList) => {
    return new Promise((resolve) => {
      workRef.current = new Worker("./worker-hash.js");
      workRef.current.postMessage({ fileChunkList });
      workRef.current.onmessage = (e) => {
        const { percentage, hash } = e.data;
        setHashPercentage(percentage);
        if (hash) {
          resolve(hash);
        }
      };
    });
  };
  const clearAll = () => {
    setFile(null);
    setData([]);
    setHashPercentage(0);
    hashRef.current = undefined;
    workRef.current = undefined;
    rqList.current = [];
  };

  const handleFileChange = (e) => {
    const [file] = e.target.files;
    if (!file) return;
    clearAll();
    setFile(file);
  };

  /** 创建分片 */
  const createChunkList = (file, size = SIZE) => {
    const list = [];
    let curr = 0;
    while (curr < file.size) {
      list.push({ file: file.slice(curr, curr + size) });
      curr += size;
    }
    return list;
  };

  const mergeRequest = () => {
    return request({
      url: "http://localhost:3021/merge",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: JSON.stringify({
        filename: file.name,
        hash: hashRef.current,
        size: SIZE,
      }),
    });
  };

  /** 并行上传 */
  const batchUpload = async (list, uploadedList) => {
    const requestList = list
      .map((v) => {
        const formData = new FormData();
        formData.append("hash", v.hash);
        formData.append("chunk", v.chunk);
        formData.append("filename", hashRef.current);
        return { hash: v.hash, formData, index: v.index };
      })
      .map(({ hash, formData, index }) => {
        // console.log('%c🤪 ~ file: App2.js:151 : ', 'color: #63ea77', rqList.current);
        if (uploadedList.includes(hash)) {
          setData((pre) => {
            pre[index].percentage = 100;
            return [...pre];
          });
          return;
        }
        return request({
          url: "http://localhost:3021",
          data: formData,
          method: "POST",
          onProgress: (e) => {
            setData((pre) => {
              pre[index].percentage = Number.parseInt(
                String((e.loaded / e.total) * 100),
              );
              return [...pre];
            });
          },
          requestList: rqList.current,
        });
      });

    await Promise.all(requestList);
    // 通知服务端合并文件
    await mergeRequest();
  };

  const handleUpload = async () => {
    if (!file) return;
    // 文件分片
    // TODO：这里分片可能有问题，因为 blob.slice 是创建新的 blob，大文件可能会造成卡顿
    const chunkList = createChunkList(file);
    // 使用 web worker 运行程序，通过文件内容生成唯一 hash，用于后续的断点上传
    const hash = await calculateHash(chunkList);
    hashRef.current = hash;
    // 校验文件是否已经上传成功，用以实现秒传；获取文件已上传的分片，用以过滤
    const { shouldUpload, uploadedList } = await verifyUpload(file.name, hash);
    if (!shouldUpload) {
      alert("skip upload: file upload success");
      return;
    }
    // 配置分片数据结构
    const _data = chunkList.map(({ file: _file }, i) => ({
      index: i,
      hash: `${hash}_${i}`,
      chunk: _file,
      size: _file.size,
      percentage: 0,
    }));

    setData(_data);
    await batchUpload(_data, uploadedList);
  };

  const getTotalPercentage = () => {
    if (!file || !data.length) return 0;
    const loaded = data
      .map((v) => v.size * v.percentage)
      .reduce((a, b) => a + b);
    return (loaded / file.size).toFixed(2);
  };

  const handleStop = () => {
    rqList.current.map((item) => item?.abort());
    rqList.current = [];
  };

  return (
    <>
      <header style={{ display: "flex", gap: "0 5px" }}>
        <button type="button" onClick={handleUpload}>
          上传
        </button>
        <button type="button" onClick={handleStop}>
          stop
        </button>
        {/* 选择文件 */}
        <input type="file" onChange={handleFileChange} />
      </header>
      <div>计算hash：{hashPercentage.toFixed(2)}%</div>
      <ProgressBar percentage={hashPercentage.toFixed(2)} />
      <div>总进度:{getTotalPercentage()}%</div>
      <ProgressBar percentage={getTotalPercentage()} />
      <div>各子项目进度</div>
      <div
        style={{
          border: "1px solid #000",
          width: "fit-content",
          padding: 10,
          display: data.length ? "block" : "none",
        }}
      >
        {data?.map((v, i) => {
          return (
            <div key={v.hash}>
              <div style={{ display: "flex" }}>
                <div>name：</div>
                <div>{v.hash}</div>
              </div>
              <div style={{ display: "flex" }}>
                <div>percentage：</div>
                <div>{v.percentage}%</div>
              </div>
              <ProgressBar percentage={v.percentage} />
              <div
                style={{
                  height: 1,
                  width: "100%",
                  background: "#000",
                  margin: "5px 0",
                  display: i === data.length - 1 ? "none" : "block",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
