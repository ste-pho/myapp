import express from 'express'

const app = express()

const PORT = 3000

import path from 'path'
import { fileURLToPath } from 'url'

app.use(express.static('Public'))

/*
app.get('/', (req, res) => {
  res.send('Welcome to myweb.com')
})

app.get('/info', (req, res) => {
  res.send('Profile')
})

app.get('/info/:topics', (req, res) => {
  res.send('Subject of profile')
})

app.get('/info/:topics/:list', (req, res) => {
  // you can define list to be names or sports e.t.c.
  const { list } = req.params
  res.send(`List of profile ${list}`)
})

/*
app.get('/search', (req, res) => {
  console.log(req.query)
  res.send('Searching...')
})
*/  
/*
app.get('/search', (req, res) => {
  const { q, sports } = req.query
  res.send(`Searching... for ${q} and ${sports}`)
})
*/

const __fileName = fileURLToPath(import.meta.url)

const __dirName = path.dirname(__fileName)

app.set('views', path.join(__dirName + '/views'))

app.get('/rand', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  res.render('rand', { randomNumber })
})

app.get('/fruits', (req, res) => {
  const fruitList = ['orange', 'banana', 'mango', 'cherry']
  res.render('fruits', { fruitList })
})
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/comments', (req, res) => {
  res.render('ind')
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})

