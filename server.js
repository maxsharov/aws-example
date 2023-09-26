const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Node.js on AWS')
})

app.get('/api/products', (req, res) => {
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
app.get('/api/users', (req, res) => {
    res.send([
        {
            userId: '101',
            name: 'John'
        },
        {
            userId: '102',
            name: 'Patrick'
        }
    ])
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})