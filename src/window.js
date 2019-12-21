const { app, BrowserWindow } = require('electron');
const widevine = require('../lib/electron-widevinecdm/src/main');
 
widevine.load(app);

const window = () => {
  return BrowserWindow.getAllWindows()[0];
};

app.on('ready', () => {
  new BrowserWindow({
    fullscreen: true,
      webPreferences: {
        nodeIntegration: false,
        enableRemoteModule: false,
        plugins: true,
        partition: 'persist:satellite-5',
        webviewTag: true,
    },
  });
});

module.exports = window;
