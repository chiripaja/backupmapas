const jwt=require('jsonwebtoken');
const generarJWT=(uid,usuario,expiracion)=>{
    return new Promise((resolve,reject)=>{       
        const payload={uid,usuario,expiracion};
        jwt.sign(payload,process.env.SECRET_JWT,(error,token)=>{
            if(error){
                console.log(error);
                reject("No se pudo generar el token.");
            }
            resolve(token)
        })
    })
}

module.exports={generarJWT}