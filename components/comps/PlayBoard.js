import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const questionStyle = css`
  cursor: default;
  font-family: 'Courier New', Courier, monospace;
`;

const PlayBoard = ({ question, score, timer, validateAnswer }) => (
  <>
    <h2
      className={questionStyle}
      onClick={() => validateAnswer(question.isCorrect)}
    >
      {question.case}
    </h2>
    <p>{timer} seconds left</p>
    <h2>{score}</h2>
  </>
);

export default PlayBoard;

PlayBoard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  validateAnswer: PropTypes.func.isRequired
};
