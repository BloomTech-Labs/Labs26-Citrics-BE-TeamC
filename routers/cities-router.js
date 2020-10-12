const router = require('express').Router();
const Cities = require('../models/cities-model.js');

// gets all cities in the app

// router.get('/', (req, res) => {
//     Cities.find()
//         .then(city => {
//             res.status(200).json(city)
//         })
//         .catch(err => {
//             res.status(500).json({
//                 message: 'Unable to retrieve cities list'
//             })
//         })
// });

// GET all cities
// router.get('/', (req, res) => {
//   Cities.findAll()
//     .then(city => {
//       res.status(200).json(city)
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: 'error retrieving locations', err
//       })
//     })
// })

router.get('/', async (req, res) => {
  const cities = await Cities.find()
  try {
    res.status(200).json(cities)
  }
  catch (err) {
    res.status(500).json({ message: 'Error while getting city', err })
  }
})

// GET city by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const city = await Cities.findById(id)
  try {
    res.status(200).json(city)
  }
  catch (err) {
    res.status(500).json({ message: 'Error while getting city', err })
  }
})

// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     Cities.findById(id)
//         .then(city => {
//             res.status(200).json(city);
//         })
//         .catch(err => {
//             res.status(500).json({ message: err })
//         })
// });


//find cities saved from a specific user

// router.get('/users/:id', (req, res) => {
//     const { id } = req.params;
//     Cities.findByUser(id)
//         .then(city => {
//             if (city) {
//                 res.status(200).json(city);
//             } else {
//                 res.status(404).json({ message: 'there are no cities saved for this user' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ message: err })
//         })
// });

module.exports = router;


