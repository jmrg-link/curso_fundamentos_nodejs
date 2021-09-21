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