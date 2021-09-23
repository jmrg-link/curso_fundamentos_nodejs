const fs = require('fs');
const dayjs = require('dayjs')

myTime = dayjs()


function readFile(ruta, cb){
    fs.readFile(ruta, (error, data) => {
        if(error){
            console.error('No ha se ha leido el fichero' + error)
        } else{
            cb(data.toString());
        }
    })
}

function writeFile(ruta,content,cb){
  fs.writeFile(ruta,content,(error)=>{
    if(error){
      console.error('No se ha podido escribir el contenido ' + error)
    } else {
      console.log('Se ha escrito correctamente')
    }
  })
}

function deleteFile(ruta,cb){
    fs.unlink(ruta,cb)
    console.log('Fichero borrado')
}

//writeFile (__dirname + '/files/rawdata.txt', ' ** Añadiendo datos al fichero : ' + myTime.format('DD-MM-YYYY'),console.log)
//readFile  (__dirname + '/files/rawData.txt',console.log)
//deleteFile(__dirname + '/files/rawData.txt',console.log)