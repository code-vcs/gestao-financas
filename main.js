const { app, BrowserWindow } = require('electron')

require("electron-reload")(__dirname, {
    require: (`${__dirname}/node_modules/electron`)
})

function createServer() {
    let tela = new BrowserWindow({
        // icon,
        width: 1200,
        height: 695,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: false,
            nativeWindowOpen: true,
        }
    })
    tela.loadFile("./views/home.html")
}
app.whenReady().then(createServer)