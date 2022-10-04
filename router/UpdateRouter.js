const express = require("express");
const UpdateNews = require("../model/UpdateModel");
const updateRouter = express.Router();

updateRouter.post("/", async (req, res) => {
  try {
    const updateNews = new UpdateNews(req.body);
    await updateNews.save();
    res.status(201).send("Upload Successfuly!");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

updateRouter.get("/", async (req, res) => {
  try {
    const updateNews = await UpdateNews.find({});
    res.status(201).send(updateNews);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

updateRouter.delete("/:id", async (req, res) => {
  try {
    await UpdateNews.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

updateRouter.put("/", async (req, res) => {
  const updateData = await UpdateNews.findById(req.body.newsId);
  if (updateData) {
    updateData.updateNews = req.body.updateNews || updateData.updateNews;

    await updateData.save();
    res.send("updated");
  } else {
    res.send("No item");
  }
});

module.exports = updateRouter;
