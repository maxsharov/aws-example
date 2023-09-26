const express = require('express')
const port = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Node.js on AWS')
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})