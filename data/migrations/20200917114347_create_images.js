
exports.up = function (knex) {
  return knex.schema.table('location', tbl => {
    tbl.string('image', 1000)
  })
};

exports.down = function (knex) {
  return knex.schema.table('location', tbl => {
    tbl.dropColumn('image')
  })
};
