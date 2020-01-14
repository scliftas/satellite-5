import React from 'react';

const Player = (props) => {
  const { config } = props;

  return <img className="h-64 w-auto hover:h-96 m-6" src={config.logo} alt={config.name} />;
};

export default Player;
