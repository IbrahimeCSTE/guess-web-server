const express = require("express");
const YoutubeLink = require("../model/YtLink");
const ytRouter = express.Router();

ytRouter.post("/", async (req, res) => {
  try {
    const link = new YoutubeLink(req.body);
    await link.save();
    res.status(201).send("upload successfuly!");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

ytRouter.get("/", async (req, res) => {
  try {
    const findLink = await YoutubeLink.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

ytRouter.delete("/:id", async (req, res) => {
  try {
    await YoutubeLink.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

ytRouter.put("/", async (req, res) => {
  try {
    const updateLink = await YoutubeLink.findById(req.body.ytId);
    if (updateLink) {
      updateLink.ytLink = req.body.ytLink || updateLink.ytLink;
      await updateLink.save();
      res.send("updated");
    } else {
      res.send("No item");
    }
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

module.exports = ytRouter;
