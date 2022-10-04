const express = require("express");
const FacebookLink = require("../model/FbLink");
const fbRouter = express.Router();

fbRouter.post("/", async (req, res) => {
  try {
    const link = new FacebookLink(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

fbRouter.get("/", async (req, res) => {
  try {
    const findLink = await FacebookLink.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

fbRouter.delete("/:id", async (req, res) => {
  try {
    await FacebookLink.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

fbRouter.put("/", async (req, res) => {
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

module.exports = fbRouter;
