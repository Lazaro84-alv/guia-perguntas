const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','171284',{
  host:'localhost',
  dialect: 'mysql'
});

module.exports = connection;