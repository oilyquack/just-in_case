import React, {useEffect, useRef, useState} from 'react';

import {
  stringToCamelCase,
  stringToCobolCase,
  stringToFlatcase,
  stringToKebabCase,
  stringToLeetCase,
  stringToMacroCase,
  stringToPascalCase,
  stringToSnakeCase,
  stringToUppercase,
} from '../../helpers/optionGenerator';
import GameOver from '../comps/GameOver';
import PlayBoard from '../comps/PlayBoard';
import ScoreBoard from '../comps/ScoreBoard';

const DEFAULT_GAME_ARGS = ['camel case', 'kebab case', 'snake case'];
const DEFAULT_GAME_QUESTIONS = [
  stringToCamelCase,
  stringToKebabCase,
  stringToSnakeCase,
];
const DEFAULT_TIME_PER_ROUND = 3; // seconds

const Home = () => {
  let highScores;

  const isReadyToShowHighScores = typeof window !== 'undefined';

  if (isReadyToShowHighScores) {
    highScores = JSON.parse(localStorage.getItem('highScore')) ?? null;
  }

  const intervalId = useRef();

  const [currentQuestion, setCurrentQuestion] = useState(() => null);
  const [possibleArgs, setPossibleArgs] = useState(() => DEFAULT_GAME_ARGS);
  const [gameStatus, setGameStatus] = useState(() => 'idle');
  const [questions, setQuestions] = useState(() => DEFAULT_GAME_QUESTIONS);
  const [score, setScore] = useState(() => null);
  const [countdown, setCountdown] = useState(() => DEFAULT_TIME_PER_ROUND);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(intervalId.current);
      timeOutQuiz();
    }
  }, [countdown]);

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const resetGameStateToDefault = () => {
    setCountdown(DEFAULT_TIME_PER_ROUND);
    setPossibleArgs(DEFAULT_GAME_ARGS);
    setQuestions(DEFAULT_GAME_QUESTIONS);
    setScore(0);
  };

  /**
   * Uses helper functions to create questions to be displayed to the user.
   * Also adds cases to the questions depending on score
   * and restarts the timer for each question.
   *
   * @memberof Index
   */
  const createQuestion = () => {
    /**
     * Don't try to clear a timer that doesn't exist when instantiating a game
     */
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    const questionNum = Math.floor(Math.random() * questions.length);
    const possibleArgsNum = Math.floor(Math.random() * possibleArgs.length);

    setCurrentQuestion(questions[questionNum](possibleArgs[possibleArgsNum]));
    setCountdown(DEFAULT_TIME_PER_ROUND);
    startTimer();
  };

  /**
   * Begins the 3 second countdown for each question.
   *
   * @memberof Index
   */
  const startTimer = () => {
    intervalId.current = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
  };

  /**
   * Resets the scoreboard and starts the game.
   * Triggers the creation of questions.
   *
   * @param {*} event Prevents default refresh behaviour of button submit events
   * @memberof Index
   */
  const startGame = (event) => {
    event.preventDefault();

    resetGameStateToDefault();
    setGameStatus('active');

    createQuestion();
  };

  /**
   * If the user doesn't click, this function is used to either select a new
   * question or set the game to be over if they should have selected the answer.
   *
   * @memberof Index
   */
  const timeOutQuiz = () => {
    if (!currentQuestion.isCorrect) {
      createQuestion();
    } else {
      resetGameStateToDefault();
      setGameStatus('game-over');
    }
  };

  /**
   * Triggered when a user clicks an answer.
   * If the user is correct, increment score and repeat.
   * If the user is incorrect, set game over.
   *
   * @param {*} isCorrect Bool used to determine if the answer is correct
   * @memberof Index
   */
  const validateAnswer = (isCorrect) => {
    clearInterval(intervalId.current);
    if (isCorrect) {
      const newScore = score + 1;
      if (newScore >= 1 && !possibleArgs.includes('pascal case')) {
        setPossibleArgs((prevValue) => [...prevValue, 'pascal case']);
        setQuestions((prevValue) => [...prevValue, stringToPascalCase]);
        setScore(newScore);
      } else if (newScore >= 2 && !possibleArgs.includes('flat case')) {
        setPossibleArgs((prevValue) => [...prevValue, 'flat case']);
        setQuestions((prevValue) => [...prevValue, stringToFlatcase]);
        setScore(newScore);
      } else if (newScore >= 3 && !possibleArgs.includes('upper case')) {
        setPossibleArgs((prevValue) => [...prevValue, 'upper case']);
        setQuestions((prevValue) => [...prevValue, stringToUppercase]);
        setScore(newScore);
      } else if (newScore >= 4 && !possibleArgs.includes('cobol case')) {
        setPossibleArgs((prevValue) => [...prevValue, 'cobol case']);
        setQuestions((prevValue) => [...prevValue, stringToCobolCase]);
        setScore(newScore);
      } else if (newScore >= 5 && !possibleArgs.includes('macro case')) {
        setPossibleArgs((prevValue) => [...prevValue, 'macro case']);
        setQuestions((prevValue) => [...prevValue, stringToMacroCase]);
        setScore(newScore);
      } else if (newScore >= 6 && !possibleArgs.includes('1337 case')) {
        setPossibleArgs((prevValue) => [...prevValue, '1337 case']);
        setQuestions((prevValue) => [...prevValue, stringToLeetCase]);
        setScore(newScore);
      } else {
        setScore(newScore);
      }
      createQuestion();
    } else {
      // Store scores locally for scoreboard
      let newHighScores;
      if (highScores) {
        newHighScores = [...highScores, score]
          .sort((a, b) => b - a)
          .slice(0, 5);
      } else {
        newHighScores = [score];
      }

      localStorage.setItem('highScore', JSON.stringify(newHighScores));

      setGameStatus('game-over');
    }
  };

  if (gameStatus === 'idle') {
    return (
      <>
        <ScoreBoard scores={highScores} />
        <button type="button" onClick={startGame}>
          Let’s Play
        </button>
      </>
    );
  } else if (gameStatus === 'active') {
    return (
      <PlayBoard
        question={currentQuestion}
        score={score}
        timer={countdown}
        validateAnswer={validateAnswer}
      />
    );
  } else if (gameStatus === 'game-over') {
    return (
      <>
        <GameOver score={score} />
        <ScoreBoard scores={highScores} />
        <button type="button" onClick={startGame}>
          Let’s Play
        </button>
      </>
    );
  } else {
    throw new Error('Could not get status of playing board.');
  }
};

export default Home;
