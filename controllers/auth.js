const { response } = require("express");
const UsuarioDTO = require("../models/Usuario");
const sequelize = require("../database/config");
const { QueryTypes } = require("sequelize");
const { generarJWT } = require("../helpers/jwt");


const loginUsuario = async(req, res) => {
  
  const { usuario, password } = req.body;
  try {
    const usuarioFIND=await UsuarioDTO.findOne({where:{usuario:usuario,password:password}})
    if(usuarioFIND==null){
        return res.status(400).json({
            ok:false,
            msg:"usuario y/o contraseña incorrecta."
        })
    }
    const expiracion=Math.floor(Date.now() / 1000) + 7200 
    const token=await generarJWT(usuarioFIND.id,usuarioFIND.usuario,expiracion)
    console.log(token)
    res.status(200).json({
        ok: true,
        uid:usuarioFIND.id,
        usuario:usuarioFIND.usuario,      
        token,
        expiracion
      });
  } catch (error) {
    res.status(500).json({
        ok:false,
        msg:'Porfavor hable con el administrador..'
    })
  }

};

const revalidarToken = async (req, res) => {
  const response = await sequelize.query("SELECT * FROM `usuarios`", {
    type: QueryTypes.SELECT,
  });
  res.json(response);
};

module.exports = {
  revalidarToken,
  loginUsuario,
};
