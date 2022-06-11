
const fs=require('fs');
const colors=require('colors');
const crearArchivo=async(base=5,l,h=10)=>{
    try{
        console.clear();
    let i=0;
    let salida='';
    let consola='';
    for(i;i<h;i++){
    salida+=(`${colors.yellow(base)} x ${colors.bgMagenta(i)} = ${i*base} \n`);
    consola+=(`${base} x ${i} = ${i*base} \n`);
    }
    console.log("====================tabla===========".cyan);
    if(l){
        console.log(salida.green);
    }
    
    
    
    fs.writeFileSync(`./salida/tabla ${base} creada.txt`,consola);
    return `tabla base creada ${base}`;

    }
    catch(err){
        throw err;
    }
    

}
module.exports={
    create:crearArchivo
}