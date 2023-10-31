const { response } = require("express");
const sequelize = require("../database/config");
const UsuarioDTO = require("../models/Usuario");


const UserGetAll=async(req,res=response)=>{
  try {
      const response=await UsuarioDTO.findAll();
      res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  } 
}

const UserGetById=async(req,res)=>{
  try {  
    const response=await UsuarioDTO.findByPk(req.params.id);
    res.json(response)
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  } 
}
const UserCreate=async(req,res)=>{
    try {
        const { usuario, password, nombre } = req.body;    
        const [user, created] = await UsuarioDTO.findOrCreate({
          where: { usuario: usuario },
          defaults: {
            usuario,
            password,
            nombre,
          },
        });    
        if(!created){
            return res.status(400).json({ok:false,msj:"El usuario ya existe."})
        }    
        res.status(201).json({
          ok: true,
          msj: "nuevo usuario Creado",
          data: user,
          creacion: created,
        });
      } catch (error) {
        res.status(500).send({ success: false, message: error.message });
      }
}


const UserUpdate=async(req,res)=>{
  try {    
    const {usuario,password,nombre,rol}=req.body;
    const usuarioExiste=await UsuarioDTO.findByPk(req.params.id);
    if(usuarioExiste){
      const response=await UsuarioDTO.update({usuario,password,nombre,rol},{where:{id:req.params.id}});    
      res.json(response)
    }else{
      res.status(500).send({ success: false, message: 'usuario no existe.' });
    } 
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}

const UserDelete=async(req,res)=>{
  try {
    const response=await UsuarioDTO.destroy({where:{id:req.params.id}});
    if(response===0){
      return res.status(400).send({success:false,message:'usuario no existe'})
    }
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
}

module.exports={
    UserGetAll,
    UserCreate,
    UserGetById,
    UserUpdate,
    UserDelete
}