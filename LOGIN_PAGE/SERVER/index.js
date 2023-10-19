const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const {mongoose} = require('mongoose');

const app = express() //this will be the entry point

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database Connected'))
.catch(() => console.log('connection failed '))
app.use('/', require('./Routes/authRoute'))

const port = 8000;
app.listen(port,()=> console.log(`server is running on the port ${port}`))

