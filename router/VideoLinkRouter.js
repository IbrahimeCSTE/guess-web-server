const express = require("express");
const VideoLink = require("../model/VideoLinkModel");
const videoRouter = express.Router();

videoRouter.post("/", async (req, res) => {
  try {
    const link = new VideoLink(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

videoRouter.get("/", async (req, res) => {
  try {
    const findLink = await VideoLink.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

videoRouter.delete("/:id", async (req, res) => {
  try {
    await VideoLink.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

videoRouter.put("/", async (req, res) => {
  try {
    const updateLink = await FacebookLink.findById(req.body.fbId);
    if (updateLink) {
      updateLink.fbLink = req.body.fbLink || updateLink.fbLink;
      await updateLink.save();
      res.send("updated");
    } else {
      res.send("No item");
    }
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = videoRouter;
