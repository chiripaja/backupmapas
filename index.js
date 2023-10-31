const express=require('express');
require('dotenv').config();
const cors=require('cors');
const sequelize = require('./database/config');
//crear servidor de express
const app=express();







//lectura y parseo del body
app.use(express.json())
app.use(cors())
//directorio publico
app.use(express.static('public'))


//rutas
app.use('/api/auth',require('./routes/auth'));
app.use('/api/user',require('./routes/user'));
app.use('/api/pueblo',require('./routes/pueblo'));



//escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log("sevidor corriendo en "+process.env.PORT)
})