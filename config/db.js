const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/examen', {
  logging: false,
});

module.exports = sequelize;
