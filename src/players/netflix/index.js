const window = require('../../window');

const open = () => {
  window().loadURL('https://www.netflix.com/browse');
};

const search = (content) => {
  window().loadURL(`https://www.netflix.com/search?q=${content}&jbp=0`);
};

const play = (content) => {
  window().loadFile('./src/players/netflix/play.html', {
    search: `q=${content}`,
  });
};

module.exports = {
  open,
  search,
  play,
};
