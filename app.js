const express = require('express');
const path = require('path');
const players = require('./src/players');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:player/open', (req, res) => {
  const playerName = req.params.player;
  const player = players[playerName].src;

  if (player === undefined) {
    res.send(`Unable to find player: ${playerName}`);
    return;
  }

  player.open();
  res.send(`Opened ${playerName}`);
});

app.get('/:player/search', (req, res) => {
  const playerName = req.params.player;
  const player = players[playerName].src;

  if (player === undefined) {
    res.send(`Unable to find player: ${playerName}`);
    return;
  }

  const content = req.query.q;

  if (content === undefined) {
    res.send('Please provide a search term');
    return;
  }

  player.search(content);
  res.send(`Searched ${playerName} for ${content}`);
});

app.get('/:player/play', (req, res) => {
  const playerName = req.params.player;
  const player = players[playerName].src;

  if (player === undefined) {
    res.send(`Unable to find player: ${playerName}`);
    return;
  }

  const content = req.query.q;

  if (content === undefined) {
    res.send('Please provide a search term');
    return;
  }

  player.play(content);
  res.send(`Playing ${content} on ${playerName}`);
});

app.listen(port, () => console.log(`🛰   Satellite 5 is listening on port ${port}!`));
