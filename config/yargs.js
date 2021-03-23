const argv = require('yargs')
    .option('b',{
        alias : 'base',
        type : 'number',
        demandOption:true,
        describe:'Esta es la base de la tabla'
    })
    .option('h',{
        alias : 'hasta',
        type : 'number',
        demandOption:true,
        describe:'Este es el límite de la tabla'
    })
    .option('l',{
        alias : 'listar', 
        type : 'boolean',
        demandOption:true,
        default:false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv,options)=>{
        if (isNaN(argv.b) ) {
            throw('la base tiene que ser un numero');
        }
        if (isNaN(argv.h) ) {
            throw('el límite tiene que ser un numero');
        }
        return true;
    } )
    .argv;

module.exports = argv;