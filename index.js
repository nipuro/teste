const express = require('express')
const product = require('./src/api/product.js')

const app = express()


app.use(express.json({extended: false}))

app.use("/api/product", product)

const PORT = 8080

app.listen(PORT,() => console.log(`Server is running in port ${PORT}`))

