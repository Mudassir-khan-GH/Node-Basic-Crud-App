const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config();
const connect_DB = require('../utils/connectToMongoDB.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
const userRouter = require('../routers/user.router.js')

connect_DB();

app.use("/api/v1/user", userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
