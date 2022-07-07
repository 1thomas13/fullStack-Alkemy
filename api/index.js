const express = require('express')
const app = express()
const port = 4000

app.use(express.json()) 

app.get('/', (req, res) => {
  res.send('Bienvenido a la api!')
})

const userRoutes = require('./routes/users')
const operationsUser = require('./routes/operations')

app.use('/user', userRoutes)
app.use('/operations', operationsUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})