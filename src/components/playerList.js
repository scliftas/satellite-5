import React from 'react';
import Player from './player';
import * as players from '../players';

const PlayerList = () => {
  const icons = Object.keys(players).map((key) => {
    const player = players[key];
    return <Player name={player.name} logo={player.logo} />;
  });

  return (
    <div className="flex-grow flex items-center content-center">
      <div className="h-128 flex-grow flex items-center justify-center">
        { icons }
      </div>
    </div>
  );
};

export default PlayerList;
