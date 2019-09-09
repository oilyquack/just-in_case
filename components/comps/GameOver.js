import PropTypes from 'prop-types';
import React from 'react';

const GameOver = ({ score }) => (
  <>
    <h2>GAME OVER</h2>
    <p>Score: {score}</p>
  </>
);

export default GameOver;

GameOver.propTypes = {
  score: PropTypes.number.isRequired
};
