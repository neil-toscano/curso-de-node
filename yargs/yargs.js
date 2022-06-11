



const argv2=require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'es la tabla de multiplicar',
                    })
                    .option('l',{
                        alias:'lista',
                        type:'boolean',
                        demandOption:false,
                        default:false,
                        describe:'muestra la tabla de multiplicar',
                    })
                    .option('h',{
                        alias:'hasta',
                        type:'number',
                        demandOption:false,
                        
                        describe:'hasta cuando',
                    })
                    .check((argv,option)=>{
                        if(isNaN(argv.base)){
                            throw 'la base tiene que ser un numero';
                        }
                        return true;
                    })
                    .argv;
                    
                
                


module.exports={
        argv2
}