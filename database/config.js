const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mapas', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  timestamps: false,
});

module.exports=sequelize