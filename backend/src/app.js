const express = require("express");
const fileUpload = require("./services/storage.service");
const postModel = require("./models/post.model");
const multer = require("multer");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

const upload = multer({Storage : multer.memoryStorage()})

app.post("/create-post", upload.single("image") , async (req, res) => {
  const caption = req.body.caption;

  const image = req.file.buffer;

  const result = await fileUpload(image);

  postModel.create({
    image: result.url,
    caption: caption,
  });

  res.status(200).json({
    message: "post created",
  });
});

app.get("/posts", async (req, res)=>{
    const posts = await postModel.find()

    res.status(200).json({
        posts,
        message : "posts fetched"
    })
})

module.exports = app;
