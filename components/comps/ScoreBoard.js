import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const ScoreBoard = ({ scores }) => (
  <>
    {scores.map(score => (
      <p>{score}</p>
    ))}
  </>
);

export default ScoreBoard;

ScoreBoard.defaultProps = {
  scores: []
};

ScoreBoard.propTypes = {
  scores: PropTypes.array
};
