require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home page')
})
app.get('/profile', (req, res) => {
  res.send('You are trying to check the profile')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})