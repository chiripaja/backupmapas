const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");

const UsuarioDTO=sequelize.define('usuarios',{
    usuario:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING
    },
    nombre:{
        type:DataTypes.STRING
    },
    rol:{
        type:DataTypes.NUMBER,
        defaultValue:1
    }
})

module.exports=UsuarioDTO