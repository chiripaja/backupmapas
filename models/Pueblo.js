const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const puebloDTO=sequelize.define('centropoblado',{
    nombre:{
        type:DataTypes.STRING,
        unique: true 
    },
    lat:{
        type:DataTypes.DECIMAL(10,8),
        allowNull: false
    },
    log:{
        type:DataTypes.DECIMAL(10,8),
        allowNull: false
    }

}, {
    freezeTableName: true
  })

module.exports=puebloDTO