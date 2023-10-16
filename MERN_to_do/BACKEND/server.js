const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const route = require("./route/ToDoRoutes");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 8000;

app.use(express);
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`connected to mongoose`))
  .catch((err) => console.log(err));
app.use(route);

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
