const db = require("../data/db-config.js");

module.exports = {
  find,
  findByUser,
  findById,
  findAllSummer,
  findAllWinter,
  findAllWinterAndSummer,
};

// get all cities 

function find() {
  return db('cities');
};

// this can be to check all cities saved by user in their profile

function findByUser(user_id) {
  return db('cities')
    .where({ user_id })
}

// // GET all data for summer
// function findAllSummer() {
//   return db('location')
//     .join('info_summer as is', 'is.location_id', 'location.id')
//     .select('location.location', 'is.*')
// }

// // GET all data for winter
// function findAllWinter() {
//   return db('location')
//     .join('info_winter as iw', 'iw.location_id', 'location.id')
//     .select('location.location', 'iw.*')
// }

function findAllWinterAndSummer() {
  return db('info_winter as w')
    .join('info_summer as s')
    .select('*')
    .where('s.id, w.location_id')
}

// GET all data for summer
function findAllSummer() {
  return db('location')
    .join('info_summer as is', 'is.location_id', 'location.id')
    .select('location.location', 'location.image', 'is.*')
}

// GET all data for winter
function findAllWinter() {
  return db('location')
    .join('info_winter as iw', 'iw.location_id', 'location.id')
    .select('location.location', 'location.image', 'iw.*')
}




// SELECT *
// FROM info_summer as s 
// INNER JOIN info_winter as w
//       ON s.id= w.location_id
// INNER JOIN location as l
//       ON s.id=l.id


// SELECT *
// FROM info_summer as s
// JOIN info_winter as w
// ON s.location_id = w.id




// GET city by id for WINTER table
function findById(id) {
  return db('location')
    .join('info_winter', 'info_winter.location_id', 'location.id')
    .where('location.id', id)
    .select('location.location', 'location.image', 'info_winter.*')
    .first()
};