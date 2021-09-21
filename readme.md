<div align="center">
  <h1>Curso de Fundamentos de Node.js</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso Node y Npm (4H)</h3>
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
#####Desarrollo
* **[Nodemon]("https://nodemon.io/"):** Demons en linux, puedes tener procesos que ves ejecutandose.

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


#####Producción

* **sudo npm install -g pm2**

* **PM2:** Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

* Voy a poner monitorizar el código para saber si algo se rompe.
* Me permite ver dashboards de mi código, puedo ver que está corriendo.
* Puedo ver el rendimiento de mi cpu
* Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.
* url de [PM2]("https://platzi.com/clases/1759-fundamentos-node/25188-herramientas-para-ser-mas-felices-nodemon-y-pm2/#:~:text=con%20ese%20ID.-,PM2,-Responder")

