<<<<<<< HEAD
const express = require("express");
const app = express();
=======
const express = require('express')
const app = express()
const cors = require('cors')
>>>>>>> 7dc11cf093ee4212628ac1eb59eb054da89a3a1e

const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT;
const userRouter = require("./routes/userRoute");
const { connectWithDb } = require("./config/db");

<<<<<<< HEAD
app.use(express.json());
app.use(
  bodyParser.urlencoded({
=======
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({
>>>>>>> 7dc11cf093ee4212628ac1eb59eb054da89a3a1e
    extended: true,
    limit: "50mb",
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/api/v1", userRouter);
app.use("/api/v1/event", userRouter);

app.listen(port, (req, res) => {
  console.log("Server is Running at Port " + port);
});
