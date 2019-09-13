import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../theme';

const questionStyle = css`
  cursor: default;
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.spacing.xxl}px;
`;

const timerStyle = css`
  font-family: ${theme.fonts.primary};
`;

const scoreStyle = css`
  font-family: ${theme.fonts.primary};
`;

const PlayBoard = ({ question, score, timer, validateAnswer }) => (
  <>
    <h2
      className={questionStyle}
      onClick={() => validateAnswer(question.isCorrect)}
    >
      {question.case}
    </h2>
    <p className={timerStyle}>{timer} seconds left</p>
    <h2 className={scoreStyle}>{score}</h2>
  </>
);

export default PlayBoard;

PlayBoard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  validateAnswer: PropTypes.func.isRequired
};
