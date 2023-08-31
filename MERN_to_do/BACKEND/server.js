const express = require('express')
const mongoose = require('mongoose')
const route = require('./Routes/ToDoRoutes')
require('dotenv').config()
const app = express()
const PORT = process.env.port||27017

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log(`connected to mongoose`))
.catch((err)=>console.log(err))
app.use(route)

app.listen(PORT,()=>console.log(`listening on: ${PORT}`))

