let router = require('express')

router.get('/', (req, res)=>{
    res.send('GET/places')
})

module.exports = router