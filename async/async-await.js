async function hello(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Hola', name);
            resolve(name)
        }, 1500)
    })
}

async function talk(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Bla Bla Bla')
            resolve(name)
        }, 1000);
    })
}

async function bye(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Adios', name)
            resolve(name)
        }, 1000)
    })
}
async function main(){
    let name = await hello('Jesus Maria')
    await talk()
    await talk()
    await talk()
    await bye(name)
    console.log('Finish process...');
}
console.log('Init process...');
main()

// Elevacion de funciones sincronas en js
// async -> primero se ejecutaran las funciones y posterior el event loop ira procesando las colas no bloqueantes del hilo de procesamineto y ejecutando los callbacks que existan en el event queue