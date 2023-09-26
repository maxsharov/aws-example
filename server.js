const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Node.js on AWS')
})

app.get('/products', (req, res) => {
    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ])
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})