const {create}=require('./helpers/multiplicar');
const {argv2}=require('./yargs/yargs');
var colors=require('colors');
console.clear();

/*console.log(process.argv);
console.log(argv);
console.log(argv.base);
/*fs.writeFile('tabla-5.txt',salida,(err)=>{
    if(err) throw err;
    console.log(salida);
})
*/
create(argv2.base,argv2.l,argv2.h)
    .then((salida)=>{
        console.log(salida.green);
    })
    .catch((err)=>{
        console.log(err);
    });

