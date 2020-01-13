const { BrowserWindow } = require('electron');

const window = () => BrowserWindow.getAllWindows()[0];

module.exports = window;
