const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const router = require('./route/router')
const cors = require('cors')

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})