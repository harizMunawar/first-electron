const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow(
        {width: 800,
        height: 600,
        frame: true, //set this to false if you dont want your window frame
        webPreferences: {
            nodeIntegration: true
        }}
    );

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin"){
        app.quit();
    }
});


const path = require('path');
const env = process.env.NODE_ENV || 'development'; 

if (env === 'development') { 
    require('electron-reload')(__dirname, { 
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron'), 
        hardResetMethod: 'exit'
    }); 
} 
