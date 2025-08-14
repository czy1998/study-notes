// 这里引入的 js，其路径是相对于当前页面路径的，所以此文件推荐放在构建工具 public 目录下
self.importScripts("/spark-md5.min.js");

self.onmessage = (e) => {
  // list
  const { fileChunkList } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;
  const loadNext = (index) => {
    const reader = new FileReader();
    // 读取切片内容
    reader.readAsArrayBuffer(fileChunkList[index].file);
    reader.onload = (e) => {
      // 读取完成后，索引加一
      count++;
      // 读取结果存储到 spark 中
      spark.append(e.target.result);
      // 全部读取完毕
      if (count === fileChunkList.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end(),
        });
        self.close();
      } else {
        // 进行中则继续向下执行
        percentage += 100 / fileChunkList.length;
        self.postMessage({
          percentage,
        });
        loadNext(count);
      }
    };
  };
  loadNext(0);
};
