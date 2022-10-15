const express = require("express");
const WinnerResult = require("../model/WinnerResult");
const winnerResultRouter = express.Router();

winnerResultRouter.post("/", async (req, res) => {
  try {
    const link = new WinnerResult(req.body);
    await link.save();
    res.status(201).send("upload successfuly!");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

winnerResultRouter.get("/", async (req, res) => {
  try {
    const findLink = await WinnerResult.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

winnerResultRouter.delete("/:id", async (req, res) => {
  try {
    await WinnerResult.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

// winnerResultRouter.put("/", async (req, res) => {
//   try {
//     const updateLink = await YoutubeLink.findById(req.body.ytId);
//     if (updateLink) {
//       updateLink.ytLink = req.body.ytLink || updateLink.ytLink;
//       await updateLink.save();
//       res.send("updated");
//     } else {
//       res.send("No item");
//     }
//   } catch (err) {
//     res.status(401).send(err.massage);
//   }
// });

module.exports = winnerResultRouter;
