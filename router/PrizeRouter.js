const express = require("express");
const WinnerPrize = require("../model/PrizeModel");
const prizeRouter = express.Router();

prizeRouter.post("/", async (req, res) => {
  try {
    const link = new WinnerPrize(req.body);
    const addLink = await link.save();
    res.status(201).send(addLink);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

prizeRouter.get("/", async (req, res) => {
  try {
    const findData = await WinnerPrize.find({});
    res.status(201).send(findData);
  } catch (err) {
    res.status(401).send(err.message);
  }
});

prizeRouter.delete("/:id", async (req, res) => {
  try {
    await WinnerPrize.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

prizeRouter.put("/", async (req, res) => {
  try {
    const updateLink = await WinnerPrize.findById(req.body.winId);
    if (updateLink) {
      updateLink.imgLink = req.body.imgLink || updateLink.imgLink;
      updateLink.winnerNo = req.body.winnerNo || updateLink.winnerNo;
      updateLink.prize = req.body.prize || updateLink.prize;
      await updateLink.save();
      res.send("updated");
    } else {
      res.send("No item");
    }
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = prizeRouter;
