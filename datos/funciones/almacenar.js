const fs = require("fs");

const nombre=async(nombre,apellido,edad)=>{
    let datos=`El nombre es: ${nombre} el apellido es ${apellido} y la edad es ${edad}`;
    try{
        fs.writeFileSync(`datos ${nombre}.txt`,datos);
        return `ejecuatado correctamente`;

    }
    catch(err){
        throw err;
    }
}

module.exports={
    nombre
}