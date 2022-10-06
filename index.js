const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ytRouter = require("./router/YtRouter");
const fbRouter = require("./router/FbRouter");
const meRouter = require("./router/MobEmailRouter");
const updateRouter = require("./router/UpdateRouter");
const noticeRouter = require("./router/NoticeRouter");
const timeDateRouter = require("./router/TimeDateRouter");
const prizeRouter = require("./router/PrizeRouter");
const ideaRouter = require("./router/IdeaRouter");
const teamRouter = require("./router/TeamListRouter");
const videoRouter = require("./router/VideoLinkRouter");
const winnerResultRouter = require("./router/WinnerResultRouter");
const dynamicTextRouter = require("./router/DtextRouter");
const adminRouter = require("./router/AdminRouter");
const winnerDetailsRouter = require("./router/WinnerDetailsRouter");
const headerImgRouter = require("./router/HeaderImgRouter");

require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

//db
const url = `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.tfzr2.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB!"))
  .catch((error) => console.log(error));

//Router
app.use("/api/yt-link", ytRouter);
app.use("/api/fb-link", fbRouter);
app.use("/api/mobile-email", meRouter);
app.use("/api/update-news", updateRouter);
app.use("/api/notice", noticeRouter);
app.use("/api/time-date", timeDateRouter);
app.use("/api/prize", prizeRouter);
app.use("/api/idea", ideaRouter);
app.use("/api/team-list", teamRouter);
app.use("/api/video-link", videoRouter);
app.use("/api/winner-result", winnerResultRouter);
app.use("/api/dynamic-text", dynamicTextRouter);
app.use("/api/admin", adminRouter);
app.use("/api/winner-details", winnerDetailsRouter);
app.use("/api/header-img", headerImgRouter);

app.get("/", (req, res) => {
  res.send("welcode");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
