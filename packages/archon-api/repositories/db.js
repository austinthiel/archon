import knex from 'knex';

const connection = knex({
  client: 'postgres',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'unsafepasswordfortesting',
    database: 'postgres',
  },
});

module.exports = connection;
