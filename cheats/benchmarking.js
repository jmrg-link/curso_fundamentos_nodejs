let suma = 0
console.time('bucle')
for (let i = 0;i < 1000000; i++){
    suma += 1
}
console.log(suma)
console.timeEnd('bucle')

let suma2 = 0
console.time('bucle2')
for (let i = 0;i < 2000000; i++){
    suma2 += 1
}
console.log(suma2)
console.timeEnd('bucle2')



asincrona = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('Termina la funcion asincrona')
        })
        resolve()
    })
}

console.time('asincrona')
asincrona()
    .then(()=>{
        console.timeEnd('asincrona')
    })

