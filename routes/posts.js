const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify , (req, res) => {
    res.json({
        "posts": {
            title: "1",
            description: "METEOR SHOWER"
        }
    })
})

module.exports = router