//console.log(global);
count = 0
//let interval = setInterval(()=>{
//    if (count >= 5) {
//        clearInterval(interval)
//    }
//    console.log(` Estan pasando ${count++} segundos`);
//},1000)

//setImmediate(()=>{
//    console.log('hi');
//})

//process.env , process.config Macosx o Linux
console.log('Version Nodejs : ' + process.versions.node);
console.log('Ruta del archivo con fichero : ' + __filename);
console.log('Ruta del archivo : ' + __dirname);
console.log('Ruta de terminal donde ejecutas el comando : ' + process.env.PWD);
console.log('Usuario logado al sistema : ' + process.env.LOGNAME);
console.log('pid sistema : ' + process.pid);
console.log('ppid sistema : ' + process.ppid);
console.log('arquitectura sistema : ' + process.config.variables.target_arch);
