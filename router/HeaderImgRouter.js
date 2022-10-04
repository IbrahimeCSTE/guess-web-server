const express = require("express");
const HeaderImg = require("../model/HeaderImgModel");
const headerImgRouter = express.Router();

headerImgRouter.post("/", async (req, res) => {
  try {
    const link = new HeaderImg(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

headerImgRouter.get("/", async (req, res) => {
  try {
    const findLink = await HeaderImg.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

headerImgRouter.delete("/:id", async (req, res) => {
  try {
    await HeaderImg.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

headerImgRouter.put("/", async (req, res) => {
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

module.exports = headerImgRouter;
