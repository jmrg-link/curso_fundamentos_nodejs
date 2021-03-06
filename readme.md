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

## Comenzando 馃殌

## Descripcion :notebook:

**Aprender Nodejs**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan nodejs y como crear proyectos en nodejs </p>

## Listado de Temas del Curso: 馃挴
    *   Curso de Fundamentos de Node.js

#### 驴Qu茅 es Nodejs ?
- NodeJS es un entorno de ejecuci贸n de JavaScript fuera del navegador. Se crea en 2009, orientado a servidores. Es muy importante que est茅 fuera del navegador debido a que ya no es necesario un navegador web para ejecutar c贸digo JavaScript.

  -   Caracter铆sticas principales de JavaScript:

-   Concurrencia: Es monohilo, con entradas y salidas as铆ncronas.

-   Motor V8: Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en c贸digo m谩quina en lugar de interpretarlo en tiempo real.

-   Todo funciona en base a M贸dulos, que son piezas de c贸digo muy peque帽as que modularizan nuestros sistemas y ayudan a entender mejor el c贸digo.

-   Orientaci贸n a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la l贸gica de 鈥淐uando sucede algo, se ejecuta esta parte de mi c贸digo y eso a su vez dispara otra parte鈥?.

---

#### 驴Qu茅 es el event loop ?
-   **Event Queue:** Contiene todos los eventos que se generan por nuestro c贸digo (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

-   **Event Loop:** Se encarga de resolver los eventos ultra r谩pidos que llegan desde el Event Queue. En caso de no poder resolverse r谩pido, envi谩 el evento al Thread Pool.

-   **Thread Pool:** Se encarga de gestionar los eventos de forma as铆ncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

<img src="https://static.platzi.com/media/user_upload/nodejs-arquitecture-3ddf57a4-0cc2-4606-8eae-5f978c217ecb.jpg" alt="platzi logo" height="300px">

-   **Explicacion:**
    -   Dentro de node, una de las dependencias m谩s importantes es libuv ya que es la que se encarga de gestionar los eventos en node.js.
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
  - 3.- Convertirlo a c贸digo maquina
  - 4.- Prepara todo lo que necesita para ejecutarse
  - 5.- Se ejecuta
  - 6.- Se cierra el proceso, y termina

* Desventaja del Monohilo

    - Si no se manejan bien los errores y uno falla, ya no continua con los procesos posteriores
    - Debes estar pendiente de todo el c贸digo y depurar de mejor manera para evitar el fallo de la apliaciion.
---
#### Variables de Entorno
- Las **variables de entorno** son una forma de llamar informaci贸n de afuera a nuestro software, sirve para definir par谩metros sencillos de configuraci贸n de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el c贸digo fuente de un script.

- El objeto process_env nos da informaci贸n sobre el procesos que est谩 ejecutando este script.
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
  * Ejecutar: **nodemon + file** al que quiero acceder detecta cambios, y ejecuta automaticamente el c贸digo.


##### Producci贸n

* **sudo npm install -g pm2**

* **PM2:** Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicaci贸n 24/7.

* Voy a poner monitorizar el c贸digo para saber si algo se rompe.
* Me permite ver dashboards de mi c贸digo, puedo ver que est谩 corriendo.
* Puedo ver el rendimiento de mi cpu
* Con: pm2 stop + id 鈥?> me detiene el proceso que est谩 en ejecuci贸n con ese ID.
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
* Los **callback Hell** se dan cuando empiezo a pasar una funci贸n como par谩metro que a su vez llama a otra funci贸n como par谩metro, y as铆 hasta n.
Una estrategia para trabajar con estas estructuras l贸gicas tan monol铆ticas es usar estructuras de control y funciones recursivas.

* Las funciones recursivas se llaman as铆 mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la funci贸n as铆 misma.

* **Ejemplo:** async/cbHell.js

---

##### Promesas
  * Las promesas vienen de los callbacks, pero las promesas lo que hacen es dar un estado.
* Las promesas son una 鈥渃lase鈥? global que podemos llamar de donde sea, nuestras funciones devuelvan promesas Promise(), la diferenia entre promises y callbacks es la capacidad de anidar promesas. Formando una cadena de promesas.
* Es muy 煤til para visualizar c贸digo as铆ncrono de manera s铆ncrona.
* **Ejemplo:** async/promises.js

---

##### Async - Await
* Con **Async / Await** podemos tratar funciones as铆ncronas como si fuesen s铆ncronas y que la sint谩xis sea m谩s legible.

* Las funciones con **Async / Await** no estar谩n bloqueando el hilo principal, pues estar谩n esperando a que se resuelva con el event loop.

* **Ejemplo:** async/async-await.js

---
### NODE.JS
---

##### Modulos en Nodejs
* Los m贸dulos en nodejs son muchos m贸dulos que vienen incluidos en m贸dulos globales. En Node.js tenemos el objeto global que tiene m茅todos y propiedades, a esto es lo que se le llama m贸dulos globales.
  * prototype.global

* Algunos m贸dulos globales:
  * setInterval
  * setInmediate
  * require
  * __dirname
  * __filename

* s铆 declaras un variable global:
```javascript
  // example
  global.variableGlobal = 'valor'
  console.log(variableGlobal)

  馃憖 En node this es un alias de global
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
* El **File System** es uno de los m贸dulos principales que nos ofrece Node, este modulo es aquel que nos permite operar directamente con los archivos de nuestro sistema, permiti茅ndonos crear, leer, editar o eliminar archivos de nuestra 铆ndole.
  
* Es mu importante tener en cuenta que la mayor铆a de m茅todos de este modulo son as铆ncronos, pero tambi茅n nos ofrecen su versi贸n s铆ncrona, la cual es muy poco recomendable a la hora de usar ya que puede bloquear el evento loop de Node.

* **Ejemplo:** modulos/fs.js
  
* Para poder usar este modulo lo debemos importar con require en una constante con el mismo nombre del m贸dulo:
```javascript
Const fs = require(鈥榝s鈥?);
//Una vez importado podremos comenzar a usar los m茅todos que este m贸dulo nos ofrece:
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
  * console.group: permite agrupar errores mediante identaci贸n.
  * console.groupEnd: finaliza la agrupaci贸n.
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
* El m贸dulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

* La diferencia m谩s significativa entre child_process.spawn y child_process.exec est谩 en lo que spawn devuelve un stream y exec devuelve un buffer.

* Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
* Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
* Usa spawn cuando quieras recibir datos desde que el proceso arranca.
* Usa exec cuando solo quieras recibir datos al final de la ejecuci贸n.

* **Ejemplo:** modulos/Child_Process.js

```javascript
const {exec , spawm } = require('child-process)
console.clear()
let proceso = spawm('cmd.exe',['/c','dir'])
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data') =>{
  console.log('驴Its death?')
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
* Node.js permite hacer uso de m贸dulos nativos de c++. Para lograr esto debemos instalar **sudo npm i -g node-gyp**, este modulo de npm nos permite compilar m贸dulos nativos de c++ en node.

* Luego debemos tener listo nuestro archivo de c贸digo fuente en c++ junto a otro archivo .gyp, que nos ayudara hacer la compilaci贸n a JavaScript.

* En este archivo .gyp le indicamos que va compilar, como se va llamar el archivo resultante y de donde va a tomar la info a convertir, todo esto lo dejamos como un json luego le decimos a node que configure este modulo, con le comando node-gyp configure, como resultado tendremos en un directorio nuevo donde se encontraran diferentes archivos de c贸digo nativo, para finalizar con node-gyp build creamos nuestro modulo y estar谩 listo para ser usado.
* **Ejemplo:** modulos/nativos/index.js

---
#### Http
* Node.js ofrece el modulo HTTP el cual nos permite principalmente crear un servidor en nuestro computador.

* Existe varias versiones del modulo **HTTP** nativos de nodejs:
  * HTTP
  * HTTPS
  * HTTP/2

* En este modulo encontraremos todo lo necesario que necesitamos para crear un sistema de rutas, que responder谩 cada ruta, los header que podr谩 mandar, etc.

* Uno de los m茅todos principales de este modulo es createServer, el cual nos permitir谩 abrir un puerto para crear el servidor.

* **Generar certifidos SSL:**

```bash
# Generar certificados con openssl
openssl genrsa -des3 -out server.key 1024 # generate .key
openssl req -new -key server.key -out server.csr # generate .csr
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt # generate .crt

openssl x509 -inform DER -outform PEM -in server.crt -out server.crt.pem # generate .crt to .pem
openssl rsa -in server.key -text > private.pem # generate .key to .pem

```

* **Ejemplo:** modulos/http.js
* **Ejemplo:** modulos/http2.js

---

#### Module Os - Operative System.
* El modulo de OS, **Operative System**, nos permite ejecutar acciones de m谩s bajo nivel en nuestro sistema, permiti茅ndonos conocer una gran variedad de detalles del mismo.
Como la memoria disponible que tiene, el total de la memoria, la interfaz de red, etc.
Esto nos ser谩 de gran ayuda a la hora de ejecutar o crear proyectos que necesiten informaci贸n de una maquina para ejecutar una operaci贸n.

* **Ejemplo:** modulos/os.js

---

#### Modulo Process
* Podremos entender y ver qu茅 pasa con el Process, podremos escuchar se帽ales, escuchar lo que necesitemos y despu茅s hacer cosas con ellos.

* Podemos hacer require para obtener process:
```javascript
//No es necesario requerirlo
const process = require('process')
```
* Pero lo anterior no es necesario, ya que process es una variable global.
  * beforeExit 鈫? Es para enviar algo antes que pare un proceso.
  * exit 鈫? Es para matar un proceso.
  * uncaughtException 鈫? Permite capturar cualquier error que no fue caputurado previamente.
  * uncaughtRejection 鈫? Permite capturar cualquier error de promesas que se han rechazado.

```javascript
process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado capturar un error')
    console.error(err)
})
```
* **Ejemplo:** modulos/process.js

---

#### Gestion de Paquete con Node.js y Npm
* npm (Node Package Manager) es un administrador de paquetes que permiten ejecutar funciones ya realizadas y validadas y de esta manera acelerar y asegurar la calidad de neustro proceso de desarrollo.

 * Podemos buscar modulos para casi todo en https://www.npmjs.com/

---

#### Contruyendo Modulos : require e Import
* Para importar modulos propios o de terceros, debemos utilizar el **require** o **import** (import se considera experimental en versiones antiguas de node)
```javascript
//Module
function suma(a, b) { return a + b};
function saludar(nombre) { return `Hola ${nombre}`}
const PI = 3.14159264

module.exports = { suma, saludar, PI }
```
```javascript
// import
const { suma, saludar, PI } = require(...path_module)
suma(3,2)
saludar('Jesuskinto')
console.log(`Pi es un constante y su valor es: ${PI}`)
```

---

#### Modulos Recomendados:
* M贸dulos que utilizaremos frecuentemente en nuestras aplicaciones como:

* **bycript :** Permite encriptar un string generando un hash.

* **bycript.hash :** Genera el hash del string, este m茅todo recibe por par谩metros el string a encriptar, las veces que debe ejecutarse el script para generar un hash aleatorio y por ultimo una funci贸n que se encarga de capturar hash o el error que se presente.

* **bycript.compare :** Permite comprar el hash con el string a encriptado y nos devuelve un true o false. bycript.compare recibe por par谩metros el string a encriptado, luego el hash y por ultimo una funci贸n que captura la informaci贸n o el error que se presente.

* Como se usa:
```js
//importamos el modulo
const bcrypt = require('bcrypt');
//declaramos el pass o palabra a encriptar
const passworld = '1234Segura';
//bcrypt.hash no permite generar un hash
bcrypt.hash(passworld, 10, function(error, hash) {
  console.log(hash);
//bcrypt.compare nos devuelve un boleano si hash y contrase帽a son iguales
  bcrypt.compare(passworld, hash, function(err, res) {
    console.log(res)
  });
});
```

* Momentjs : Logramos manipular fechas de manera eficiente.
moment.format : Podemos darle un formato adecuado a nuestra fecha.

```js
//importamos el modulo
const moment = require('moment');
let ahora = moment();
//establecemos el formato a usar
let ahoraFormat = ahora.format('HH:mm:ss');
console.log(ahoraFormat);
```

* sharp : Permite trabajar con im谩genes

```js
//importamos el modulo
const sharp = require('sharp');
//ruta de la imagen a modificar
sharp('fondo-carro.jpg')
//scalamos la imagen a 500 de alto
  .resize(500)
//otorgamos una escala de grises
  .grayscale()
//generamos el archivo modificado
  .toFile('fondo-carro-small.jpg');
```
---

#### Datos en Memoria Vs Datos Almacenados
* La informaci贸n en memoria esta pensada para ser escrita rapida pero borrada tambien rapida.
* La informaci贸n almacenada en disco puede ser almacenada durante mucho mas tiempo pero es mucho mas lento escribir y leer en ellos.
<img src="https://www.enterprisestorageforum.com/wp-content/uploads/2021/02/memory-vs-storage_6019c498d2ad7.png" alt="platzi mem" height="300px">

---

#### Buffers
* 驴Qu茅 es un Buffer?
  * Buffers son objetos usados para represnetar un secuencia de bytes con una longitud fija. Es una subclase de Uint8Arrays y esta en el scope global. Estan dise帽adas para trabajar con datos binarios.

* 驴Por qu茅 usar Buffers?
  * JavaScript puro aunque bueno con cadenas de texto unicode no maneja muy bien datos binarios. Esto esta bien el el navegador donde casi toda la data proviene de strings. Sin embargo los servidores con Node tambi茅n tienen que lidiar con TCP strams o con leet y escribir en el sistema de archivos. Ambos necesitan usar streams de datos binarios.

* Una maneja de manjear esto es usar strings que es lo que Node intento hacer primero. Este approach resulto bastante problematico porque tiene una tendencia a romperse de maneas extra帽as y misteriosas.
*  **Ejemplo:** modulos/buffer.js

---

#### Streams
* Las **Streams** son colecciones de datos, como matrices o cadenas. La diferencia es que las transmisiones pueden no estar disponibles de una vez y no tienen que caber en la memoria. Esto hace que las transmisiones sean realmente poderosas cuando se trabaja con grandes cantidades de datos, o datos que provienen de una fuente externa o un fragmento a la vez.

*  **Ejemplo:** modulos/streams.js

---
#### Pruebas con Node.js (Benchmarking)
* Realizar pruebas de velocidad y rendimiento en nuestro codigo es positivo y recomendable para tener un control de la aplicacion y su funcionalidad correcta.
* La funci贸n **console.time(鈥榥ombre鈥?)** inicia un temporizador que se puede usar para rastrear cu谩nto tiempo dura una operaci贸n. El temporizador sera identificado por el nombre dado a la consola. Ese mismo nombre se utilizara cuando se llame a console.timeEnd(鈥榥ombre鈥?) para detener el temporizador y obtener el tiempo demorado durante el proceso.
*  **Ejemplo:** cheats/benchmarking.js
---
#### Error First Callback
* Los Error First Callbacks se utilizan para pasar primero el error y los datos posteriormente. Entonces, puedes verificar el primer argumento, es decir, el objeto de error para ver si algo sali贸 mal y puedes manejarlo. En caso de que no haya ning煤n error, puedes utilizar los argumentos posteriores y seguir adelante.
*  **Ejemplo:** cheats/errorFisrt.js
```javascript
fs.readFile('/text.txt', function(err, data) {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	} 
});
```
---

#### Webscrapping con puppeter
* **Web scraping** es una t茅cnica utilizada mediante programas de software para extraer informaci贸n de sitios web. Usualmente, estos programas simulan la navegaci贸n de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente, o incrustando un navegador en una aplicaci贸n.
*  **Ejemplo:** cheats/scrapping.js
---
#### Automatizacion de Tareas con **GULP.JS**
* Que es gulp.js? 馃摉馃枼馃挜
* Es una herramienta de construcci贸n en JavaScript construida sobre flujos de nodos . Estos flujos facilitan la conexi贸n de operaciones de archivos a trav茅s de canalizaciones . Gulp lee el sistema de archivos y canaliza los datos disponibles de un complemento de un solo prop贸sito a otro a trav茅s del .pipe()operador, haciendo una tarea a la vez. Los archivos originales no se ven afectados hasta que se procesan todos los complementos. Se puede configurar para modificar los archivos originales o para crear nuevos. Esto otorga la capacidad de realizar tareas complejas mediante la vinculaci贸n de sus numerosos complementos. Los usuarios tambi茅n pueden escribir sus propios complementos para definir sus propias tareas. 
*  **Ejemplo:** gulpfile.js
----
