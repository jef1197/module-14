// const Sequelize = require('sequelize');
// require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.DB_HOST,
//       dialect: 'postgres',
//       port: process.env.DB_PORT
//     }
//   );
// }

const { Sequelize } = require('sequelize')
require('dotenv').config();
const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env

let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
})

export const sequelizeConnection = async () => {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Postgres connection has been established successfully.')
      })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = sequelize;