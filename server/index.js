require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/user.js");
const cors = require("cors");

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json({ message: "SUCCESS" });
});

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
