import PropTypes from 'prop-types';
import React from 'react';

import styles from './PlayBoard.module.css';

const PlayBoard = ({ question, score, timer, validateAnswer }) => (
  <>
    <h2
      className={styles.playBoard_question}
      onClick={() => validateAnswer(question.isCorrect)}
    >
      {question.case}
    </h2>
    <p className={styles.playBoard_timer}>{timer} seconds left</p>
    <h2 className={styles.playBoard_score}>Score: {score}</h2>
  </>
);

export default PlayBoard;

PlayBoard.propTypes = {
  question: PropTypes.shape({}).isRequired,
  score: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  validateAnswer: PropTypes.func.isRequired
};
