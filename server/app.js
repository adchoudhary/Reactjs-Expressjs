const express = require('express')
const app = express()
const port = 3002

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const cors = require('cors')


var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
}

var products = [ { id: 1, name: 'Soap', rate: 5 }]

app.get('/', cors(corsOptions), (req, res) => res.json(products))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))