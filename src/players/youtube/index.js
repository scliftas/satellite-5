const window = require('../../window');

const open = () => {
  window().loadURL('https://www.youtube.com/tv#/');
};

const search = (content) => {
  window().loadURL(`https://www.youtube.com/tv#/search?resume&q=${content}`, {
    userAgent: 'Mozilla/5.0 (Linux; Tizen 2.3) AppleWebKit/538.1 (KHTML, like Gecko)Version/2.3 TV Safari/538.1'
  });
};

const play = (content) => {
  window().loadFile('./src/players/youtube/play.html', {
    search: `resume&q=${content}`,
  });
};

module.exports = {
  open,
  search,
  play,
};
