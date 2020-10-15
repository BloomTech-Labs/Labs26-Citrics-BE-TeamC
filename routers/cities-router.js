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
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit


  const cities = await Cities.find()
  const data = {}

  if (endIndex < cities.length) {
    data.next = {
      page: page + 1,
      limit: limit
    }
  }

  if (startIndex > 0) {
    data.previous = {
      page: page - 1,
      limit: limit
    }
  }

  data.data = cities.slice(startIndex, endIndex)
  try {
    res.status(200).json(data)
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

module.exports = router;


