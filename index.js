require('dotenv').config()
let express = require('express')
let app = express()

//defines JSX
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// implements places.js
app.use('/places', require('./controllers/places'))

// home page
app.get('/', (req, res)=>{
    res.render('home')
})

// wildcard route
app.get('*', (req, res)=>{
    res.render('error404')
})

app.listen(process.env.PORT)