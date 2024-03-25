const express = require('express')

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./config/db')

const { readdirSync } = require('fs')

const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({ limit: '10mb'}))

readdirSync('./route')
    .map((url) => app.use('/api', require('./route/' + url)))

app.listen(3000,()=> console.log('Server is running on port 3000'))