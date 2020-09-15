const db = require("../data/db-config.js");

module.exports = {
  find,
  findByUser,
  findById,
  findAllSummer,
  findAllWinter,
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

// GET all data for summer
function findAllSummer() {
  return db('location')
    .join('info_summer as is', 'is.location_id', 'location.id')
    .select('location.location', 'is.*')
}

// GET all data for winter
function findAllWinter() {
  return db('location')
    .join('info_winter as iw', 'iw.location_id', 'location.id')
    .select('location.location', 'iw.*')
}

// GET city by id for WINTER table
function findById(id) {
  return db('location')
    .join('info_winter', 'info_winter.location_id', 'location.id')
    .where('location.id', id)
    .select('location.location', 'info_winter.*')
    .first()
};