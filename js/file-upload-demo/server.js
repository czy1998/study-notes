const http = require("node:http");
const path = require("node:path");
const fse = require("fs-extra");
const multiparty = require("multiparty");

const server = http.createServer();
/** 存放上传文件的目录 */
const UPLOAD_DIR = path.resolve(__dirname, "target");
/**
 * 处理 post 请求的参数
 * @param {*} req
 * @returns
 */
const resolvePost = (req) => {
  return new Promise((resolve) => {
    let chunk = "";
    req.on("data", (data) => {
      chunk += data;
    });
    req.on("end", (data) => {
      const result = JSON.parse(chunk);
      resolve(result);
    });
  });
};
/**
 * 将目标文件转换为流，再传到指定可写流中
 * @param {*} path 需要读取的文件路径
 * @param {*} writeStream
 * @returns
 */
const pipeStream = (path, writeStream) => {
  return new Promise((resolve) => {
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      fse.unlinkSync(path);
      resolve();
    });
    readStream.pipe(writeStream);
  });
};

/**
 * 合并分片，生成文件
 * @param {*} filePath 合并后的文件绝对路径
 * @param {*} filename 文件hash-用于拼接临时存储目录
 * @param {*} size 切片大小-用于确定数据写入位置
 */
const mergeFileChunk = async (filePath, filename, size) => {
  // 切片存放的目录绝对路径
  const chunkDir = path.resolve(UPLOAD_DIR, "chunkDir_" + filename);
  // 获取目录中所有的切片文件名
  const chunkPaths = await fse.readdir(chunkDir);
  // 排序，索引从小打大
  chunkPaths.sort((a, b) => a.split("_")[1] - b.split("_")[1]);
  // 读取写入文件
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
        })
      )
    )
  );
  // 删除存放切片的目录
  fse.rmdirSync(chunkDir);
};
/**
 * 获取已上传的切片
 * @param {*} fileHash 
 * @returns 
 */
const getUploadedList = async (fileHash) => {
  // 切片存放目录
  const url = path.resolve(UPLOAD_DIR, `chunkDir_${fileHash}`);
  return fse.existsSync(url) ? await fse.readdir(url) : [];
};

server.on("request", async (req, res) => {
  // console.log(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.status = 200;
    res.end();
    return;
  }
  if (req.url === "/verify") {
    const { fileName, fileHash } = await resolvePost(req);
    // 上传合并后的文件路径
    const filePath = path.resolve(UPLOAD_DIR, fileHash);
    // 文件已上传
    if (fse.existsSync(filePath)) {
      res.end(
        JSON.stringify({
          shouldUpload: false,
        })
      );
    } else {
      // 文件上传中，返回已上传的切片列表
      res.end(
        JSON.stringify({
          shouldUpload: true,
          uploadedList: await getUploadedList(fileHash),
        })
      );
    }
  }

  if (req.url === "/merge") {
    const data = await resolvePost(req);
    const { filename, hash, size } = data;
    // 合并后的路径
    const filePath = path.resolve(UPLOAD_DIR, `${hash}`);
    await mergeFileChunk(filePath, hash, size);
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({
        code: 0,
        message: "file merged success",
      })
    );
  }

  const multipart = new multiparty.Form();

  // 接收上传的文件
  multipart.parse(req, async (err, fields, files) => {
    if (err) return;
    const [chunk] = files.chunk;
    const [hash] = fields.hash;
    const [filename] = fields.filename;

    // 切片存放目录
    const chunkDir = path.resolve(UPLOAD_DIR, `chunkDir_${filename}`);
    // 判断目录是否存在
    if (!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir);
    }
    // 接收到的切片，将其迁移指定目录处
    await fse.move(chunk.path, `${chunkDir}/${hash}`);
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify("received file chunk"));
  });
});

server.listen(3021, () => {
  console.log("Server is running at http://localhost:3021");
});
