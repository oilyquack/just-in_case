import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../theme/index';

const scoreBoardStyle = css`
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 20px;
`;

const titleStyle = css`
  ${theme.typography.heading};
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
    <h2 className={titleStyle}>HIGH SCORE{scores.length > 1 ? 'S' : null}</h2>
    <div className={scoresStyle}>
      {scores.map((score, index) => (
        <div className={scoreStyle}>
          <span>{ranks[index]}</span>
          <span>{score}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ScoreBoard;

ScoreBoard.defaultProps = {
  scores: []
};

ScoreBoard.propTypes = {
  scores: PropTypes.array
};
