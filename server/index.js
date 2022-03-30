require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
// const models = require("./models/models.js");
const cors = require("cors");
const router = require("./routes/router.js");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

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
