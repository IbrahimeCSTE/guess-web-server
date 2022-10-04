const express = require("express");
const WinnerPrize = require("../model/PrizeModel");
const prizeRouter = express.Router();

prizeRouter.post("/", async (req, res) => {
  const link = new WinnerPrize(req.body);
  const addLink = await link.save();
  res.status(201).send(addLink);
});

prizeRouter.get("/", async (req, res) => {
  const findData = await WinnerPrize.find({});
  res.status(201).send(findData);
});

prizeRouter.delete("/:id", async (req, res) => {
  await WinnerPrize.findByIdAndDelete(req.params.id);
  res.send("deleted");
});

prizeRouter.put("/", async (req, res) => {
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
});

module.exports = prizeRouter;
