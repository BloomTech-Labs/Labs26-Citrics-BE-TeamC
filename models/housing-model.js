const db = require("../data/db-config.js");

module.exports = {
    find

};

// get all housing data

function find() {
    return db('housing');
};

