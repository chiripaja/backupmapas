/*
    USUARIOS CRUD
    HOST+/api/pueblo    
*/
const { Router } = require("express");
const { getAll, create, getByid, update, deleted } = require("../controllers/pueblo.controller");
const router=Router()
router
    .get('/',getAll)       
    .post('/',create)
    .get('/:id',getByid) 
    .put('/:id',update)
    .delete('/:id',deleted)

module.exports = router;