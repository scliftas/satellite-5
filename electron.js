const electron = require('electron');

const { app, BrowserWindow } = electron.app;
require('./src/server');

const widevine = require('./lib/electron-widevinecdm/src/main');

widevine.load(app);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      plugins: true,
      partition: 'persist:satellite-5',
      webviewTag: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
