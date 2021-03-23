const colors = require("colors");
const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta=10) => {
    try{
        console.log('======================'.green);
        console.log(`Tabla del ${base}`.bgRed);
        console.log('======================'.green);
    
        let salida = '';
    
        for(i = 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        
        fs.writeFile(`./salida/tabla-${base}.txt`,salida, (err)=>{
            if(err) throw err;
            console.log(`tabla del ${base} creada`);
        });
    
        if (listar) {
            console.log(salida);
        }


        return `tabla del ${base} creada`;
    }catch(error){
        throw err;
    }

}


module.exports = {
    crearArchivo : crearArchivo
}