//const process = require('process')
process.on('beforeExit',()=>{
    console.log('El proceso se va a terminar');
})

process.on('exit',()=>{
    console.log('El proceso se acabo');
})

process.on('uncaughtException',(err,origen)=>{
    console.log('se nos olvido capturar un error')
    console.error(err)
})

funcionNoExistente()
console.log('si hay error ese msg no sale');
//process.on('uncaughtRejection')