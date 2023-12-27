import PropTypes from 'prop-types';
import React from 'react';

import styles from './GameOver.module.css'

const GameOver = ({ score }) => (
  <div className={styles.gameOver}>
    <h2>GAME OVER</h2>
    <p>Score: {score}</p>
  </div>
);

export default GameOver;

GameOver.propTypes = {
  score: PropTypes.number.isRequired
};
