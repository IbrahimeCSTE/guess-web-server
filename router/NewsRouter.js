const express = require("express");
const News = require("../model/NewsModel");

const newsRouter = express.Router();

newsRouter.post("/", async (req, res) => {
  try {
    const link = new News(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

newsRouter.get("/", async (req, res) => {
  try {
    const findLink = await News.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

newsRouter.delete("/:id", async (req, res) => {
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

newsRouter.put("/", async (req, res) => {
  try {
    const updateLink = await News.findById(req.body.newsId);
    if (updateLink) {
      updateLink.imgUrl = req.body.upImgUrl || updateLink.imgUrl;
      updateLink.title = req.body.upTitle || updateLink.title;
      updateLink.des1 = req.body.upDes1 || updateLink.des1;
      updateLink.des2 = req.body.upDes2 || updateLink.des2;
      updateLink.catagory = req.body.upCatagory || updateLink.catagory;
      updateLink.postDate = req.body.upPostDate || updateLink.postDate;

      await updateLink.save();
      res.send("updated");
    } else {
      res.send("No item");
    }
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = newsRouter;
