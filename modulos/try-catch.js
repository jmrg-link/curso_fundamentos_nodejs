otherFunc = () => seRompe()

seRompe = () => 3 + 3

function seRomepAsync(cb) {
    setTimeout(function () {
        try {
            return 3 + ZZZ
        } catch (err) {
            console.warn('error en funcion asincrona')
            cb(err)
        }
    })
}

try {
    seRompe()
    seRomepAsync((err) => {
        console.log(err.message)
    })
} catch (err) {
    //console.error('Se rompio...' + err.message);
    console.error(err.message);
}