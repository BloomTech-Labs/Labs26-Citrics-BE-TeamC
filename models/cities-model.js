const db = require("../data/db-config.js");


module.exports = {
    find,
    findByUser,
    findById,

};

// get all cities 

function find() {
    return db('cities');

};


//find city by id

function findById(id) {
    return db('cities')
        .first()
        .where({ id })
};

// this can be to check all cities saved by user in their profile

function findByUser(user_id) {
    return db('cities')
        .where({ user_id })

}

