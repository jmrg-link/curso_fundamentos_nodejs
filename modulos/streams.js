const fs = require('fs')
const stream = require('stream')
const util = require('util')
let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('utf-8')

//readableStream.on('data',(chunk)=>{
//    //console.log(chunk);
//    data += chunk
//})
//
//readableStream.on('end',function (){
//    console.log(data)
//})

//process.stdout.write('hola ')
//process.stdout.write('que  ')
//process.stdout.write('tal? ')

const Transform = stream.Transform;
function Mayus(){
    Transform.call(this)
}
util.inherits(Mayus,Transform)

Mayus.prototype._transform = function(texto,codif,cb){
    textoMayuscula = texto.toString().toLowerCase()
    this.push(textoMayuscula)
    cb()
}
let mayus = new Mayus()
readableStream.pipe(mayus).pipe(process.stdout)