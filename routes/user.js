/*
    USUARIOS CRUD
    HOST+/api/user    
*/

const { Router } = require("express");
const {
  UserGetAll,
  UserCreate,
  UserGetById,
  UserUpdate,
  UserDelete,
} = require("../controllers/usuario.controller");
const router = Router();

router
  .get("/", UserGetAll)  
  .post("/", UserCreate)
  .get("/:id", UserGetById)
  .put("/:id", UserUpdate)
  .delete("/:id", UserDelete);

module.exports = router;
