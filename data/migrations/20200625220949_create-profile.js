exports.up = (knex) => {
  return knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })

    .createTable('location', tbl => {
      tbl.increments();
      tbl.string('location').notNullable().unique();
    })

    .createTable('info', tbl => {
      tbl.increments();
      tbl.string('maxtempF').notNullable();
      tbl.string('FeelsLikeF').notNullable();
      tbl.string('mintempF').notNullable();
      tbl.string('maxtempC').notNullable();
      tbl.string('FeelsLikeC').notNullable();
      tbl.string('mintempC').notNullable();
      tbl.string('precipMM').notNullable();
      tbl.string('totalSnow_cm').notNullable();
      tbl.string('uvIndex').notNullable();
      tbl.string('DewPointC').notNullable();
      tbl.string('HeatIndexC').notNullable();
      tbl.string('WindChillC').notNullable();
      tbl.string('WindGustKmph').notNullable();
      tbl.string('cloudcover').notNullable();
      tbl.string('humidity').notNullable();
      tbl.string('pressure').notNullable();
      tbl.string('visibility').notNullable();
      tbl.string('windspeedKmph').notNullable();

      tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('location'); // must defines what table it refers to
    })
    ;
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('info')
    .dropTableIfExists('location')
    .dropTableIfExists('profiles')
    ;
};
