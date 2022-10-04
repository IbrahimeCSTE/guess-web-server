const express = require("express");
const WinnerDetails = require("../model/WinnerDetails");
const winnerDetailsRouter = express.Router();

winnerDetailsRouter.post("/", async (req, res) => {
  try {
    const link = new WinnerDetails(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

winnerDetailsRouter.get("/", async (req, res) => {
  try {
    const findLink = await WinnerDetails.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

winnerDetailsRouter.delete("/:id", async (req, res) => {
  try {
    await WinnerDetails.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

winnerDetailsRouter.put("/", async (req, res) => {
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

module.exports = winnerDetailsRouter;
