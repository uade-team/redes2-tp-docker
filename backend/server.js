const express = require('express')
const cors = require('cors')
const { getRandomEmoji } = require('./emoji.service');

const port = 3000
const app = express()

app.use(cors())

app.get('/emoji', (req, res) => {
    res.send(getRandomEmoji());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})