const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://username:password@localhost:port/database', {
  logging: false,
});

module.exports = sequelize;
