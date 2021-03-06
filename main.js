const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require('path');

const envDev = !app.isPackaged;

let win ;
function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        heigth: 800,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname,'preload.js')
        }
    });
    win.loadFile('index.html');
}

if(envDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}


ipcMain.on('notify', (event, message)=> {

    // let iconAddress = path.join(__dirname, '/icon.png');
    new Notification({
        title: 'Notification',
        body: message,
        // icon: iconAddress
    }).show();

})

ipcMain.on('userLogin', (event, data) => {
    console.log({user: data})
    if(data){
        console.log({win: win})
        win = new BrowserWindow({
            width: 1200,
            heigth: 800,
            backgroundColor: 'white',
            webPreferences: {
                nodeIntegration: false,
                worldSafeExecuteJavaScript: true,
                contextIsolation: true,
                preload: path.join(__dirname,'preload.js')
            }
        });
        win.loadFile('index.html');
    }
})

app.whenReady().then(createWindow).catch((e) => {
    console.error(e)
})