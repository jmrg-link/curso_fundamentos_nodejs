<div align="center">
  <h1>Curso de Fundamentos de Node.js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso Fundamentos de Nodejs (4H)</h3>
  <h5></h5>
</div>

## Requisitos :clipboard:

*   Clousures y Scope
*   Javascript Basico
*   Curso de nodejs y npm
*   Curso de ES6
*   Curso de prework en; OSX (Mac), Windows o Linux.

## Comenzando 🚀

## Descripcion :notebook:

**Aprender Nodejs**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan nodejs y como crear proyectos en nodejs </p>

## Listado de Temas del Curso: 💯
    *   Curso de Fundamentos de Node.js

#### ¿Qué es Nodejs ?
- NodeJS es un entorno de ejecución de JavaScript fuera del navegador. Se crea en 2009, orientado a servidores. Es muy importante que esté fuera del navegador debido a que ya no es necesario un navegador web para ejecutar código JavaScript.

  -   Características principales de JavaScript:

-   Concurrencia: Es monohilo, con entradas y salidas asíncronas.

-   Motor V8: Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real.

-   Todo funciona en base a Módulos, que son piezas de código muy pequeñas que modularizan nuestros sistemas y ayudan a entender mejor el código.

-   Orientación a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de “Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte”.

---

#### ¿Qué es el event loop ?
-   **Event Queue:** Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

-   **Event Loop:** Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

-   **Thread Pool:** Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

<img src="https://static.platzi.com/media/user_upload/nodejs-arquitecture-3ddf57a4-0cc2-4606-8eae-5f978c217ecb.jpg" alt="platzi logo" height="300px">

-   **Explicacion:**
    -   Dentro de node, una de las dependencias más importantes es libuv ya que es la que se encarga de gestionar los eventos en node.js.
    - Algunas de las funcionalidades de **libuv** son:
        -   Bucle de eventos con todas las funciones necesarias.
        -   Operaciones asincronas sobre archivos.
        -   Eventos del sistema de archivos.
        -   Grupo de hilos/procesos (Thread pool).

```link
http://docs.libuv.org/en/v1.x/
```
---

#### Monohilo
* Proceso de node

  - 1.- Va a abrirse un proceso, ese proceso es un proceso de node
  - 2.- Interpreta todo el archivo
  - 3.- Convertirlo a código maquina
  - 4.- Prepara todo lo que necesita para ejecutarse
  - 5.- Se ejecuta
  - 6.- Se cierra el proceso, y termina

* Desventaja del Monohilo

    - Si no se manejan bien los errores y uno falla, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el código y depurar de mejor manera para evitar el fallo de la apliaciion.
---
#### Variables de Entorno
- Las **variables de entorno** son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

- El objeto process_env nos da información sobre el procesos que está ejecutando este script.
La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.

* **example:** varEntorno.js

---

#### Desarrollo:

* [Nodemon]("https://nodemon.io/") Demons en linux, puedes tener procesos que ves ejecutandose.

```bash
//instalar nodemon como global 
  sudo npm install nodemon -g
//En package.json podemos escribir un script con cierto comando.
  script: {
  "dev": "nodemon src/app.js "
}
// Ejecutar comando para correr nodemon con demons 
npm run dev 
```
  * Ejecutar: **nodemon + file** al que quiero acceder detecta cambios, y ejecuta automaticamente el código.


##### Producción

* **sudo npm install -g pm2**

* **PM2:** Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

* Voy a poner monitorizar el código para saber si algo se rompe.
* Me permite ver dashboards de mi código, puedo ver que está corriendo.
* Puedo ver el rendimiento de mi cpu
* Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.
* url de [PM2]("https://platzi.com/clases/1759-fundamentos-node/25188-herramientas-para-ser-mas-felices-nodemon-y-pm2/#:~:text=con%20ese%20ID.-,PM2,-Responder")

```bash
# General
$ npm install pm2 -g            # Install PM2
$ pm2 start app.js              # Start, Daemonize and auto-restart application (Node)
$ pm2 start app.py              # Start, Daemonize and auto-restart application (Python)
$ pm2 start npm -- start        # Start, Daemonize and auto-restart Node application
 
# Cluster Mode (Node.js only)
$ pm2 start app.js -i 4         # Start 4 instances of application in cluster mode
                                # it will load balance network queries to each app
$ pm2 reload all                # Zero Second Downtime Reload
$ pm2 scale [app-name] 10       # Scale Cluster app to 10 process
 
# Process Monitoring
$ pm2 list                      # List all processes started with PM2
$ pm2 monit                     # Display memory and cpu usage of each app
$ pm2 show [app-name]           # Show all information about application
 
# Log management
$ pm2 logs                      # Display logs of all apps
$ pm2 logs [app-name]           # Display logs for a specific app
$ pm2 logs --json               # Logs in JSON format
$ pm2 flush
$ pm2 reloadLogs
 
# Process State Management
$ pm2 start app.js --name="api" # Start application and name it "api"
$ pm2 start app.js -- -a 34     # Start app and pass option "-a 34" as argument
$ pm2 start app.js --watch      # Restart application on file change
$ pm2 start script.sh           # Start bash script
$ pm2 start app.json            # Start all applications declared in app.json
$ pm2 reset [app-name]          # Reset all counters
$ pm2 stop all                  # Stop all apps
$ pm2 stop 0                    # Stop process with id 0
$ pm2 restart all               # Restart all apps
$ pm2 gracefulReload all        # Gracefully reload all apps in cluster mode
$ pm2 delete all                # Kill and delete all apps
$ pm2 delete 0                  # Delete app with id 0
 
# Startup/Boot management
$ pm2 startup                   # Detect init system, generate and configure pm2 boot on startup
$ pm2 save                      # Save current process list
$ pm2 resurrect                 # Restore previously saved processes
$ pm2 unstartup                 # Disable and remove startup system
 
$ pm2 update                    # Save processes, kill PM2 and restore processes
$ pm2 generate                  # Generate a sample json configuration file
 
# Deployment
$ pm2 deploy app.json prod setup    # Setup "prod" remote server
$ pm2 deploy app.json prod          # Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # Revert "prod" remote server by 2
 
# Module system
$ pm2 module:generate [name]    # Generate sample module with name [name]
$ pm2 install pm2-logrotate     # Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # Uninstall module
$ pm2 publish                   # Increment version, git push and npm publish
```
---

#### Callbacks
* Una funcion **callback** es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
* La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo:
```javascript
setTimeout(console.log('Hello'), 1000) // cada segundo hay una funcion de log que dice hello

// setTimeout es una higher-order function y console.log es una callback function
```
#### Metodos Asincronos.
---
##### Callbacks
* Los **callback Hell** se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.

* Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.

* **Ejemplo:** async/cbHell.js

---

##### Promesas
  * Las promesas vienen de los callbacks, pero las promesas lo que hacen es dar un estado.
* Las promesas son una “clase” global que podemos llamar de donde sea, nuestras funciones devuelvan promesas Promise(), la diferenia entre promises y callbacks es la capacidad de anidar promesas. Formando una cadena de promesas.
* Es muy útil para visualizar código asíncrono de manera síncrona.
* **Ejemplo:** async/promises.js

---

##### Async - Await
* Con **Async / Await** podemos tratar funciones asíncronas como si fuesen síncronas y que la sintáxis sea más legible.

* Las funciones con **Async / Await** no estarán bloqueando el hilo principal, pues estarán esperando a que se resuelva con el event loop.

* **Ejemplo:** async/async-await.js

---
### NODE.JS
---

##### Modulos en Nodejs
* Los módulos en nodejs son muchos módulos que vienen incluidos en módulos globales. En Node.js tenemos el objeto global que tiene métodos y propiedades, a esto es lo que se le llama módulos globales.
  * prototype.global

* Algunos módulos globales:
  * setInterval
  * setInmediate
  * require
  * __dirname
  * __filename

* sí declaras un variable global:
```javascript
  // example
  global.variableGlobal = 'valor'
  console.log(variableGlobal)

  👀 En node this es un alias de global
  // === verificacion estricta (true)
  this === global

  // Ejemplos de Process
  //process.env , process.config , process
console.log('Version Nodejs : ' + process.versions.node);
console.log('Ruta del archivo con fichero : ' + __filename);
console.log('Ruta del archivo : ' + __dirname);
console.log('Ruta de terminal donde ejecutas el comando : ' + process.env.PWD);
console.log('Usuario logado al sistema : ' + process.env.LOGNAME);
console.log('pid sistema : ' + process.pid);
console.log('ppid sistema : ' + process.ppid);
console.log('arquitectura sistema : ' + process.config.variables.target_arch);

```

---

##### File system
* El **File System** es uno de los módulos principales que nos ofrece Node, este modulo es aquel que nos permite operar directamente con los archivos de nuestro sistema, permitiéndonos crear, leer, editar o eliminar archivos de nuestra índole.
  
* Es mu importante tener en cuenta que la mayoría de métodos de este modulo son asíncronos, pero también nos ofrecen su versión síncrona, la cual es muy poco recomendable a la hora de usar ya que puede bloquear el evento loop de Node.

* **Ejemplo:** modulos/fs.js
  
* Para poder usar este modulo lo debemos importar con require en una constante con el mismo nombre del módulo:
```javascript
Const fs = require(‘fs’);
//Una vez importado podremos comenzar a usar los métodos que este módulo nos ofrece:
Fs.readFile(path, callback);
Fs.writeFile(path, content, callback)
Fs.unlink(path, callback)
```

---

#### Console
* Con console podemos imprimir todo tipo de valores por
nuestra terminal.
* **Ejemplo:** modulos/console.js
  * console.log: recibe cualquier tipo y lo muestra en el consola.
  * console.info: es equivalente a log pero es usado para informar.
  * console.error: es equivalente a log pero es usado para errores.
  * console.warn: es equivalente a log pero es usado para warning.
  * console.table: muestra una tabla a partir de un objeto.
  * console.count: inicia un contador autoincremental.
  * console.countReset: reinicia el contador a 0.
  * console.time: inicia un cronometro en ms.
  * console.timeEnd: Finaliza el cronometro.
  * console.group: permite agrupar errores mediante identación.
  * console.groupEnd: finaliza la agrupación.
  * console.clear: Limpia la consola.

---
#### Errores Try - Catch
* Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es caputado. si el error no se captura node se detiene.

  * Siempre que sea posible debemos capturar todos los errores que se puedan generar en nuestros hilos.
  * **Ejemplo:** modulos/try-catch.js

* Nos permite caputar los errores:
```javascript
const badfunction = () => 5 + z;
try {
    badfunction()
} catch (error) {
    console.log('bad function ha fallado')
    console.error(error.message)
}
console.log('continuamos...')
```
* Si deseamos manejar errores asincronos:
```javascript
function badfunction() {
    setImmediate(() => {
        try {
            return 5 + z
        } catch (error) {
            console.log('bad function ha fallado')
            console.error(error.message)
            console.log('continuamos...')
        }
    });
}
badfunction()
```

---
#### Child Process
* El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

* La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

* Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
* Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
* Usa spawn cuando quieras recibir datos desde que el proceso arranca.
* Usa exec cuando solo quieras recibir datos al final de la ejecución.

* **Ejemplo:** modulos/Child_Process.js

```javascript
const {exec , spawm } = require('child-process)
console.clear()
let proceso = spawm('cmd.exe',['/c','dir'])
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data') =>{
  console.log('¿Its death?')
  console.log(process.killed)
  console.log(data.toString())
}

process.on('exit', ()=> {
  console.log('' El proceso ha finalizado)
  console.log(proceso.killed)
})
```

---
#### Modulos Nativos de C++
* Node.js permite hacer uso de módulos nativos de c++. Para lograr esto debemos instalar **sudo npm i -g node-gyp**, este modulo de npm nos permite compilar módulos nativos de c++ en node.

* Luego debemos tener listo nuestro archivo de código fuente en c++ junto a otro archivo .gyp, que nos ayudara hacer la compilación a JavaScript.

* En este archivo .gyp le indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir, todo esto lo dejamos como un json luego le decimos a node que configure este modulo, con le comando node-gyp configure, como resultado tendremos en un directorio nuevo donde se encontraran diferentes archivos de código nativo, para finalizar con node-gyp build creamos nuestro modulo y estará listo para ser usado.
* **Ejemplo:** modulos/nativos/index.js

---
#### Http
* Node.js ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.

* Existe varias versiones del modulo **HTTP** nativos de nodejs:
  * HTTP
  * HTTPS
  * HTTP/2

* En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responderá cada ruta, los header que podrá mandar, etc.

* Uno de los métodos principales de este modulo es createServer, el cual nos permitirá abrir un puerto para crear el servidor.

* **Ejemplo:** modulos/http.js

---

#### Module Os - Operative System.
* 