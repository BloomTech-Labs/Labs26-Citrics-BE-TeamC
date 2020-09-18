exports.up = function (knex) {
    return knex.schema.createTable('housing', tbl => {
        tbl.increments();

        tbl.string('state', 128).notNullable();
        tbl.string('city', 128).notNullable();
        tbl.integer('housing').notNullable();

    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('housing')
};