import { css } from '@emotion/css';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../theme';

const gameOverStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.primary};
  margin: 20px 0 20px 0;
`;

const GameOver = ({ score }) => (
  <div>
    <h2>GAME OVER</h2>
    <p>Score: {score}</p>
  </div>
);

export default GameOver;

GameOver.propTypes = {
  score: PropTypes.number.isRequired
};
