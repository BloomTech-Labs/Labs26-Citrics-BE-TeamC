var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });
// const pgConnection = "postgres://cxssyouz:bYywWXo757yDfrDrTSQnsyNBQfrngqpF@otto.db.elephantsql.com:5432/cxssyouz";

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};
