const {nombre}=require('./funciones/almacenar');
const name="neil";
const lastname="toscano";
const age=23;
console.log(process.argv);

const [,,base,]=process.argv;
const [,obtenerindex]=base.split("=");
console.log(obtenerindex);
/*nombre(name,lastname,age)
    .then((dato)=>console.log(dato))
    .catch((error)=>console.log(error));
*/