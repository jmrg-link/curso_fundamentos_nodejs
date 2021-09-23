const os = require('os')

console.log(`Nuestra plataforma es : ${os.platform()}`);
console.log(`Muestra los core : (${os.cpus().length}) Cpu Core`);
//console.log('Muestra las señales de prioridad del Sistema Operativo: ' , os.constants);
console.log(`Directorio principal del user logeado : ${os.homedir()}`);
console.log(`Hostname local del PC: ${os.hostname()}`);
console.log(`Directorio temporal : ${os.tmpdir() } `);
console.log(`Tiempo de uso del PC sin apagarse : (${Math.round(os.uptime() / 3600)} horas)`);
console.log();

// Calcular bytes {byte to : 'kb' , 'mb' , 'gb'}
let SIZE = 1024
//Referencia this === RAM
let RAM = {
    kb(bytes) {
        return bytes / SIZE
    },
    mb(bytes) {
        return this.kb(bytes) / SIZE
    },
    gb(bytes) {
        return this.mb(bytes) / SIZE;
    },
}

console.group('Medidas de Memoria Ram: ')
console.log('...........................');
console.group('Memoria en KB')
console.log(`Nuestra Meroria RAM total en KB : ${RAM.kb(os.totalmem())} kb`);
console.log(`Nuestra Meroria RAM libre en KB : ${RAM.kb(os.freemem()) } kb`);
console.groupEnd('Memoria en KB')
console.log('...........................');
console.group('Memoria en MB')
console.log(`Nuestra Meroria RAM total en MB : ${RAM.mb(os.totalmem())} mb`);
console.log(`Nuestra Meroria RAM libre en MB : ${RAM.mb(os.freemem())} mb`);
console.groupEnd('Memoria en MB')
console.log('...........................');
console.group('Memoria en GB')
console.log(`Nuestra Meroria RAM total en GB : ${RAM.gb(os.totalmem())} gb`);
console.log(`Nuestra Meroria RAM libre en GB : ${RAM.gb(os.freemem()) } gb`);
console.groupEnd('Memoria en GB')
console.log('...........................');
console.groupEnd('Medidas de Memoria Ram')