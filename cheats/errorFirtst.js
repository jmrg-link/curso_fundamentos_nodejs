function asincrona() {
    setTimeout(function () {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e) {
            console.error(e)
        }
    }, 1000)
}

asincrona(function (err, dato) {
    if (err) {
        console.error('tenemos un error')
        console.error(err)
        return false
        //throw err
    }
    console.log('Tdo funciona correctamente', dato)
})





