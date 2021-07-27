const express = require('express')
const app = express()
const body = require('body-parser')
const cors = require('cors')

const port = 3000

const carro = []

app.use(cors())
app.use(body.urlencoded({ extended: true }));


//const vat = 'eu sou coritias'
//carro.push(vat)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/', (req, res) => {
    res.send(carro)
  })
app.post('/create', (req, res) => {
    carro.push(req.body)
    res.status(200).send('Sucess')
  })

