const { response } = require("express");
const puebloDTO = require("../models/pueblo");
const modelo=puebloDTO

const getAll = async (req, res = response) => {
  try {
    const response = await modelo.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

const getByid = async (req, res) => {
  try {
    const response = await modelo.findByPk(req.params.id);
    res.json(response);
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { nombre, log, lat } = req.body;
    const [response, created] = await modelo.findOrCreate({
      where: { nombre },
      defaults: {
        log,
        lat,
      },
    });
    if (!created) {
      return res
        .status(400)
        .json({ succes: false, msj: "El centro poblado ya existe." });
    }
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ succes: false, msj: error.message });
  }
};

const update = async (req, res) => {
  try {    
    const {nombre,lat,log}=req.body;
    const usuarioExiste=await modelo.findByPk(req.params.id);
    if(usuarioExiste){
      const response=await modelo.update({nombre,lat,log},{where:{id:req.params.id}});    
      res.json(response)
    }else{
      res.status(500).send({ success: false, message: 'usuario no existe.' });
    } 
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const deleted = async (req, res) => {
  try {
    const response = await modelo.destroy({ where: { id: req.params.id } });
    if (response === 0) {
      return res
        .status(400)
        .send({ success: false, message: "Dato no existe." });
    }
    res.json(response);
  } catch (error) {
    res.status(500).json({ succes: false, msj: error.message });
  }
};


module.exports={
    getAll,
    getByid,
    create,
    update,
    deleted
}