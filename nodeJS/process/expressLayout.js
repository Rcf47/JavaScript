const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about/', (req, res) => {
  res.render('about')
})

app.get('/user/:username', (req, res) => {
  res.render('user', { username: req.params.username })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is working on: http://localhost:${PORT}`)
})
