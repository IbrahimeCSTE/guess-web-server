const express = require("express");
const mongoose = require("mongoose");

const Idea = require("../model/IdeaModel");
const ideaRouter = express.Router();

ideaRouter.post("/", async (req, res) => {
  try {
    const link = new Idea(req.body);
    const existMoblie = await Idea.findOne({ mobile: req.body.mobile });
    const existEmail = await Idea.findOne({ email: req.body.email });
    //console.log(existMoblie);
    if (existEmail || existMoblie) {
      res.status(201).send("অন্য ইমেইল বা নম্বর দিয়ে চেষ্টা করুন");
    } else {
      await link.save();
      res.status(201).send("রেজিস্ট্রেশন সম্পূর্ন হয়েছে!");
    }
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

ideaRouter.get("/", async (req, res) => {
  try {
    const findLink = await Idea.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

ideaRouter.delete("/", async (req, res) => {
  try {
    Idea.collection.drop();
    res.send("delete all element");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

module.exports = ideaRouter;
