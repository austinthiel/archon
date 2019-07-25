import knex from 'knex';

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'test_user',
    password: 'TestPassword!1',
    database: 'archon_development',
  },
});

module.exports = connection;
