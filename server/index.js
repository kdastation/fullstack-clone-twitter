require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
// const models = require("./models/models.js");
const cors = require("cors");
const router = require("./routes/router.js");
const cookieParser = require("cookie-parser");
const ErrorMiddleware = require("./middlewares/error-middleware.js");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 7000;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(ErrorMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("run server", PORT);
    });
  } catch (error) {
    console.log(console.error());
  }
};

start();
