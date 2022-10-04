const express = require("express");
const Admin = require("../model/AdminModel");
const adminRouter = express.Router();

adminRouter.post("/", async (req, res) => {
  try {
    const ad = req.body.admin;
    //console.log(ad);
    const findLink = await Admin.find({});
    // console.log(typeof Object.keys(findLink).length);

    if (Object.keys(findLink).length) {
      findLink[0].admin = ad;
      await findLink[0].save();
    } else {
      const link = new Admin(req.body);
      await link.save();
      res.send("upload");
    }
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

adminRouter.get("/", async (req, res) => {
  try {
    const findLink = await Admin.find({});
    res.status(201).send(findLink);
  } catch (err) {
    res.status(401).send(err.massage);
  }
});

// adminRouter.delete("/:id", async (req, res) => {
//   try {
//     await FacebookLink.findByIdAndDelete(req.params.id);
//     res.status(201).send("deleted");
//   } catch (err) {
//     res.status(401).send(err.message);
//   }
// });

// adminRouter.put("/", async (req, res) => {
//   try {
//     const updateLink = await FacebookLink.findById(req.body.fbId);
//     if (updateLink) {
//       updateLink.fbLink = req.body.fbLink || updateLink.fbLink;
//       await updateLink.save();
//       res.send("updated");
//     } else {
//       res.send("No item");
//     }
//   } catch (err) {
//     res.status(401).send(err.message);
//   }
// });

module.exports = adminRouter;
