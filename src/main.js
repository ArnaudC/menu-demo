const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const {Menu} = electron

app.on('ready', _ => {
    console.log('ready')    
    let win = new BrowserWindow({
        height: 400,
        width: 400})

        const name = electron.app.getName();
        const template = [{
            label: name,
            submenu: [{
                label: `About ${name}`
            }]
        }]
        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu);
})

