const express = require("express");
const TeamList = require("../model/TeamListModel");
const teamRouter = express.Router();

teamRouter.post("/", async (req, res) => {
  try {
    const link = new TeamList(req.body);
    await link.save();
    res.status(201).send("Post successfully");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

teamRouter.get("/", async (req, res) => {
  try {
    const findLink = await TeamList.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

teamRouter.delete("/:id", async (req, res) => {
  try {
    await TeamList.findByIdAndDelete(req.params.id);
    res.status(201).send("deleted");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = teamRouter;
