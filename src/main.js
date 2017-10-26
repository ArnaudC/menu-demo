const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('ready', _ => {
    console.log('ready')    
    let win = new BrowserWindow({
        height: 400,
        width: 400})
})

