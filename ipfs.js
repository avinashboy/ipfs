const express = require("express");
const IPFS = require("ipfs-api");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");

const ipfsNetwork = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
const app = express();
const port = process.env.PORT || 3000;
const MaxSize = 5 * 1024 * 1024;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MaxSize, // limiting files size to 5 MB
  },
});

app.post("/api/upload", uploader.single("image"), async (req, res) => {
  try {
    const { originalname, buffer, size } = req.file;
    if (MaxSize < size) return res.send(`less than this size ${MazSize}Mb`);
    console.log("req.file post router:", req.file);
    const filesAdded = await ipfsNetwork.add(buffer);
    console.log("filesAdded:", filesAdded);
    res.send(`https://ipfs.io/ipfs/${filesAdded[0].hash}`);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", async (req, res) => {
  res.send("ipfs upload");
});

app.listen(port, () =>
  console.log(`File IPFS uploader API listening on port ${port}`)
);
