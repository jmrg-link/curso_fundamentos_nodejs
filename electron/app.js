const { app , BrowserWindow } = require ('electron')

let ventanaPrincipal

app.on('ready',CrearVentana())

function CrearVentana (){
    ventanaPrincipal = new BrowserWindow({
        width:800,
        height:600
    })
}

ventanaPrincipal.loadFile('index.html')
