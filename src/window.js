const { app, BrowserWindow } = require('electron');

const window = () => {
    return BrowserWindow.getAllWindows()[0];
};

module.exports = window;
