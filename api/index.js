const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Bienvenido a la api!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})