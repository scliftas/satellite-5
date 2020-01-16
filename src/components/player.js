import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Player = (props) => {
  const {
    name,
    logo,
  } = props;

  const open = () => {
    axios.get(`/${name.toLowerCase()}/open`);
  };

  return (
    <img
      src={logo}
      alt={name}
      onClick={open}
      className="h-64 w-auto hover:h-96 m-6 transition-100 shadow-2xl"
    />
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Player;
