import { css } from '@emotion/css';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from './core/Heading';
import theme from '../../theme/index';

const scoreBoardStyle = css`
  font-family: ${theme.fonts.secondary};
  margin-bottom: 20px;
`;

const scoresStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const scoreStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  text-align: center;
  width: 80px;
`;

const ranks = ['1st', '2nd', '3rd', '4th', '5th'];

const ScoreBoard = ({ scores }) => (
  <div className={scoreBoardStyle}>
    <Heading
      level="2"
      text={scores.length > 1 ? 'HIGH SCORES' : 'HIGH SCORE'}
    />
    <div className={scoresStyle}>
      {scores.map((score, index) => (
        <div className={scoreStyle} key={ranks[index]}>
          <span>{ranks[index]}</span>
          <span>{score}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ScoreBoard;

ScoreBoard.defaultProps = {
  scores: [],
};

ScoreBoard.propTypes = {
  scores: PropTypes.array,
};
