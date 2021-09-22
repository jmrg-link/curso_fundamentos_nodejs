function hello(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Hola', name);
            resolve(name)
        }, 1500)
    })
}

function talk(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Bla Bla Bla')
            resolve(name)
        }, 1000);
    })
}

function bye(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('Adios', name)
            resolve(name)
        }, 1000)
    })
}

console.log('Init process...');
hello('Jesus')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(bye)
    .then((name) => {
        console.log('Finish process...');
    })
    .catch(error => {
        console.warn('Ha habido un error...');
        console.error(error);
    })