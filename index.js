require('dotenv').config()
let express = require('express')
let app = express()

// implements places.js
app.use('/places', require('./controllers/places'))

// home page
app.get('/', (req, res)=>{
    res.send('Home Page')
})

// wildcard route
app.get('*', (req, res)=>{
    res.status(404).send("<h1>404 Page</h1>")
})

app.listen(process.env.PORT)