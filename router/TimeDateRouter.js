const express = require("express");
const TimeDate = require("../model/TimeDateModel");
const timeDateRouter = express.Router();

timeDateRouter.post("/", async (req, res) => {
  try {
    const timeDate = new TimeDate(req.body);
    await timeDate.save();
    res.status(201).send("Upload Successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

timeDateRouter.get("/", async (req, res) => {
  try {
    const timeDate = await TimeDate.find({});
    res.status(201).send(timeDate);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

timeDateRouter.delete("/:id", async (req, res) => {
  try {
    await TimeDate.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

timeDateRouter.put("/", async (req, res) => {
  const updateData = await TimeDate.findById(req.body.noticeId);
  if (updateData) {
    updateData.hour = req.body.hour || updateData.hour;
    updateData.min = req.body.min || updateData.min;
    updateData.sec = req.body.sec || updateData.sec;
    updateData.ampm = req.body.ampm || updateData.ampm;
    updateData.date = req.body.date || updateData.date;
    updateData.month = req.body.month || updateData.month;
    updateData.year = req.body.year || updateData.year;

    await updateData.save();
    res.send("updated");
  } else {
    res.send("No item");
  }
});

module.exports = timeDateRouter;
