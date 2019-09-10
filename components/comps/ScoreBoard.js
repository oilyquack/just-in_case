import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const scoreBoardStyle = css`
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 20px;
`;

const scoresStyle = css`
  display: flex;
  justify-content: center;
`;

const scoreStyle = css`
  align-items: center;
  border-top: 2px solid black;
  border-right: 1px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;

  &:last-child {
    border-right: 2px solid black;
  }
`;

const ScoreBoard = ({ scores }) => (
  <div className={scoreBoardStyle}>
    <h2>HIGH SCORE</h2>
    <div className={scoresStyle}>
      {scores.map(score => (
        <span className={scoreStyle}>{score}</span>
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
