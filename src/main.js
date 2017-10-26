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
                label: `About ${name}`,
                click: _ => {
                    console.log('about clicked!')
                }
            }, {
                type: 'separator'
            }, {
                label: 'Quit',
                click: _ => { app.quit() },
                accelerator: 'CommandOrControl+q'
            }, {
                label: 'Minimize',
                role: 'minimize'
            }]
        }, {
            label: 'Toggle full screen',
            role: 'togglefullscreen'
        }, {
            label: 'isZoomed',
            type: 'checkbox'
        },
        {
            label: 'Learn More',
            click () { require('electron').shell.openExternal('https://electron.atom.io') }
        }]
        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu);
})

