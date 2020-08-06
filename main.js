const { app,BrowserWindow } = require('electron')
function createWindow(){
    const win =new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences:{
            nodeIntegration: true
        }
    })
    require('./main/Menu.js')
    win.loadFile('index.html')
   // win.webContents.openDevTools()
}
app.whenReady().then(createWindow)
app.on('window-all-closed',() =>{
    if(process.platform != 'darwin'){
        app.quit
    }
})
app.on('activate',() =>{
    if (BrowserWindow.getAllWindows.length == 0){
        createWindow()
    }
})