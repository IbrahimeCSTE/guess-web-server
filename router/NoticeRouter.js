const express = require("express");
const Notice = require("../model/NoticeModel");
const noticeRouter = express.Router();

noticeRouter.post("/", async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    res.status(201).send("Uploaded Successfuly");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

noticeRouter.get("/", async (req, res) => {
  try {
    const notice = await Notice.find({});
    res.status(201).send(notice);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

noticeRouter.delete("/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

noticeRouter.put("/", async (req, res) => {
  try {
    const updateData = await Notice.findById(req.body.noticeId);
    if (updateData) {
      updateData.notice = req.body.notice || updateData.notice;

      await updateData.save();
      res.send("updated");
    } else {
      res.send("No item");
    }
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

module.exports = noticeRouter;
