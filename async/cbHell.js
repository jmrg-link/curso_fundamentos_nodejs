function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla ...');
        callbackHablar()
    })
}

function adios(nombre, otroCallback) {
    setTimeout(function () { 
        console.log('Adios', nombre); 
        otroCallback(); 
    }, 5000);
}

// CALLBACK - BHELL
//console.log('Iniciando proceso...');
//hola('Jesus', function (nombre) {
//    hablar(function () {
//        hablar(function () {
//            hablar(function () {
//                hablar(function () {
//                    hablar(function () {
//                        hablar(function () {
//                            adios(nombre, function () {
//                                console.log('Terminando proceso...');
//                            });
//                        });
//                    });
//                });
//            });
//        });
//    })
//});



// --

function conversacion(nombre, nVeces, cb) {
    if (nVeces > 0) {
        hablar(function () {
            conversacion(nombre, --nVeces, cb)
        })
    }
    else {
        cb(nombre,cb)
    }
}
console.log('Iniciando proceso...');
hola('jesus', function (nombre) {
    conversacion(nombre, 2, function(){
        console.log('Proceso terminado...');
    })
})

//Ejemplo correcto
//hola('Jesus', function (nombre) {
//    hablar(function () {
//        adios(nombre, function () {
//            console.log('Terminando proceso...');
//        });
//    });
//});
