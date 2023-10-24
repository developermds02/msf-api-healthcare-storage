require('dotenv').config()
const express = require('express')
const app = express()

const routerSave = require('./routes/saveFile') 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const { PORT, NODE_ENV, PORT_DEV } = process.env
const port = NODE_ENV === 'development' ? PORT_DEV : PORT

app.use(routerSave)

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = { app, server }