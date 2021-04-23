const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hellow changed')
})

app.get('/test', (req, res) => {
    res.send('from test route')
})

app.listen(port, () => {
    console.log('Example app listening ');
})