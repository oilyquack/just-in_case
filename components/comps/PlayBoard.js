import { css, keyframes } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../theme';

const trembleAnimation = keyframes`
  0% {
    transform: translate(0.1px, 0.1px) rotate(0deg);
  }
  10% {
    transform: translate(-0.1px, -0.2px) rotate(-1deg);
  }
  20% {
    transform: translate(-0.3px, 0.0px) rotate(1deg);
  }
  30% {
    transform: translate(0.3px, 0.2px) rotate(0deg);
  }
  40% {
    transform: translate(0.1px, -0.1px) rotate(1deg);
  }
  50% {
    transform: translate(-0.1px, 0.2px) rotate(-1deg);
  }
  60% {
    transform: translate(-0.3px, 0.1px) rotate(0deg); 
  }
  70% {
    transform: translate(0.3px, 0.1px) rotate(-1deg);
  }
  80% {
    transform: translate(-0.1px, -0.1px) rotate(1deg);
  }
  90% {
    transform: translate(0.1px, 0.2px) rotate(0deg);
  }
  100% {
    transform: translate(0.1px, -0.2px) rotate(-1deg); 
  }
`;

const questionStyle = css`
  animation: ${trembleAnimation} 0.5s infinite;
  cursor: default;
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.spacing.xxl}px;
  margin-bottom: 8px;
  padding: 4px;
`;

const timerStyle = css`
  font-family: ${theme.fonts.primary};
  margin-bottom: 8px;
  padding: 4px;
`;

const scoreStyle = css`
  font-family: ${theme.fonts.primary};
  margin-bottom: 8px;
  padding: 4px;
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
    <h2 className={scoreStyle}>Score: {score}</h2>
  </>
);

export default PlayBoard;

PlayBoard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  validateAnswer: PropTypes.func.isRequired
};
