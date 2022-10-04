const express = require("express");
const MobileEmail = require("../model/MobEmailModel");
const meRouter = express.Router();

meRouter.post("/", async (req, res) => {
  try {
    const mobEmail = new MobileEmail(req.body);
    await mobEmail.save();
    res.status(201).send("Upload Successfuly!");
  } catch (err) {
    res.status(201).send(err.massage);
  }
});

meRouter.get("/", async (req, res) => {
  try {
    const mobEmail = await MobileEmail.find({});
    res.status(201).send(mobEmail);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

meRouter.delete("/:id", async (req, res) => {
  try {
    await MobileEmail.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(201).send(err.massage);
  }
});

meRouter.put("/", async (req, res) => {
  const updateMobEmail = await MobileEmail.findById(req.body.meId);
  if (updateMobEmail) {
    updateMobEmail.mobile = req.body.mobile || updateMobEmail.mobile;
    updateMobEmail.email = req.body.email || updateMobEmail.email;
    await updateMobEmail.save();
    res.send("updated");
  } else {
    res.send("No item");
  }
});

module.exports = meRouter;
