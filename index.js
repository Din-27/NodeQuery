const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const dataRoute = require('./route/router')

const app = express()

const port = 5000

app.use(cors())
app.use(express.json())
app.use('/siswa', dataRoute)
app.use(urlencoded({extended : true}))

app.listen(port, ()=> console.log(`Listening on Port ${port}`))