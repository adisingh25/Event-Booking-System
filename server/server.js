const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT;
const userRouter = require("./routes/userRoute");
const { connectWithDb } = require("./config/db");

app.use(express.json());
app.use("/api/v1", userRouter);

app.listen(port, (req, res) => {
  console.log("Server is Running at Port " + port);
});
