import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../theme';

const gameOverStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.primary};
`;

const GameOver = ({ score }) => (
  <div className={gameOverStyle}>
    <h2>GAME OVER</h2>
    <p>Score: {score}</p>
  </div>
);

export default GameOver;

GameOver.propTypes = {
  score: PropTypes.number.isRequired
};
