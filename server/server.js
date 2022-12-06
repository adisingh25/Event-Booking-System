const express = require('express')
const app = express()

const bodyParser = require('body-parser')

require('dotenv').config();

const port = process.env.PORT
const userRouter = require('./routes/userRoute')
require('./config/db')

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "50mb"
}))
app.use(bodyParser.json({limit: "50mb"}))

app.use("/api/v1", userRouter)

app.listen(port, (req,res) => {
    console.log('Server is Running at Port ' + port)
})