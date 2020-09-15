const db = require("../data/db-config.js");


module.exports = {
  find,
  findByUser,
  findById,
  findAll

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

// GET all cities
function findAll() {
  return db('location')
    .join('info as i', 'i.location_id', 'location.id')
    .select('location.location', 'i.*')
}

// GET city by id
function findById(id) {
  return db('location')
    .join('info as i', 'i.location_id', 'location.id')
    .where('location.id', id)
    .select('location.location', 'i.*')
    .first()
};