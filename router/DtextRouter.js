const express = require("express");
const DynamicText = require("../model/DtextModel");
const dynamicTextRouter = express.Router();

dynamicTextRouter.post("/", async (req, res) => {
  try {
    const link = new DynamicText(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

dynamicTextRouter.get("/", async (req, res) => {
  try {
    const findLink = await DynamicText.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

dynamicTextRouter.delete("/:id", async (req, res) => {
  try {
    await DynamicText.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

dynamicTextRouter.put("/", async (req, res) => {
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

module.exports = dynamicTextRouter;
