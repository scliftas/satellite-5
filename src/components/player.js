import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  const {
    name,
    logo,
  } = props;

  return <img className="h-64 w-auto hover:h-96 m-6" src={logo} alt={name} />;
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Player;
