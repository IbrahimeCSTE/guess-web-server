const express = require("express");
const NewsComment = require("../model/NewsCommetModel");
const commentRouter = express.Router();

commentRouter.post("/new", async (req, res) => {
  try {
    const link = new NewsComment(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

commentRouter.get("/", async (req, res) => {
  try {
    const findLink = await NewsComment.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

commentRouter.delete("/:id", async (req, res) => {
  try {
    await NewsComment.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});
module.exports = commentRouter;
