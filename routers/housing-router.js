const router = require('express').Router();
const Housing = require('../models/housing-model.js');

// gets all cities in the app

router.get('/', (req, res) => {
    Housing.find()
        .then(housing => {
            res.status(200).json(housing)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Unable to retrieve housing data'
            })
        })
});


module.exports = router;