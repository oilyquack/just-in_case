import React from 'react';

import GameOver from '../components/comps/GameOver';
import PlayBoard from '../components/comps/PlayBoard';
import ScoreBoard from '../components/comps/ScoreBoard';
import Title from '../components/comps/Title';
import PageLayout from '../components/layouts/PageLayout';
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
} from '../helpers/optionGenerator';

const homeMeta = {
  title: 'just-in_case',
  description: 'Can you be the case master?',
};

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.countDown = this.countDown.bind(this);
    this.createQuestion = this.createQuestion.bind(this);
    this.startGame = this.startGame.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.timeOutQuiz = this.timeOutQuiz.bind(this);

    this.timer = null;

    this.state = {
      possibleArgs: ['camel case', 'kebab case', 'snake case'],
      isGameOver: false,
      hasStarted: false,
      questions: [stringToCamelCase, stringToKebabCase, stringToSnakeCase],
      score: 0,
      timeLeft: 3,
    };
  }

  componentDidMount() {
    const highScores = JSON.parse(localStorage.getItem('highScore'));

    if (highScores) {
      this.setState({
        scores: highScores,
      });
    }
  }

  /**
   * Resets the scoreboard and starts the game.
   * Triggers the creation of questions.
   *
   * @param {*} event Prevents default refresh behaviour of button submit events
   * @memberof Index
   */
  startGame(event) {
    event.preventDefault();

    this.setState({
      hasStarted: true,
      isGameOver: false,
      possibleArgs: ['camel case', 'kebab case', 'snake case'],
      questions: [stringToCamelCase, stringToKebabCase, stringToSnakeCase],
      score: 0,
    });
    this.createQuestion();
  }

  /**
   * Uses helper functions to create questions to be displayed to the user.
   * Also adds cases to the questions depending on score
   * and restarts the timer for each question.
   *
   * @memberof Index
   */
  createQuestion() {
    const { possibleArgs, questions } = this.state;
    clearInterval(this.timer);

    const questionNum = Math.floor(Math.random() * questions.length);
    const possibleArgsNum = Math.floor(Math.random() * possibleArgs.length);

    this.setState({
      question: questions[questionNum](possibleArgs[possibleArgsNum]),
      timeLeft: 3,
    });

    this.startTimer();
  }

  /**
   * Begins the 3 second countdown for each question.
   *
   * @memberof Index
   */
  startTimer() {
    this.timer = setInterval(() => {
      this.countDown();
      if (this.state.timeLeft === 0) {
        clearInterval(this.timer);
        this.timeOutQuiz();
      }
    }, 1000);
  }

  /**
   * For each second that counts down, take 1 away from the clock.
   *
   * @memberof Index
   */
  countDown() {
    this.setState({
      timeLeft: this.state.timeLeft - 1,
    });
  }

  /**
   * If the user doesn't click, this function is used to either select a new
   * question or set the game to be over if they should have selected the answer.
   *
   * @memberof Index
   */
  timeOutQuiz() {
    const { question } = this.state;
    if (!question.isCorrect) {
      this.createQuestion();
    } else {
      this.setState({
        hasStarted: false,
        isGameOver: true,
        score: 0,
        startTimer: false,
        timeLeft: 3,
      });
    }
  }

  /**
   * Triggered when a user clicks an answer.
   * If the user is correct, increment score and repeat.
   * If the user is incorrect, set game over.
   *
   * @param {*} isCorrect Bool used to determine if the answer is correct
   * @memberof Index
   */
  validateAnswer(isCorrect) {
    const { possibleArgs, questions, score } = this.state;
    clearInterval(this.timer);
    if (isCorrect) {
      const newScore = score + 1;
      if (newScore >= 5 && possibleArgs.indexOf('pascal case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, 'pascal case'],
          questions: [...questions, stringToPascalCase],
          score: newScore,
        });
      } else if (newScore >= 10 && possibleArgs.includes('flat case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, 'flat case'],
          questions: [...questions, stringToFlatcase],
          score: newScore,
        });
      } else if (newScore >= 15 && possibleArgs.includes('upper case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, 'upper case'],
          questions: [...questions, stringToUppercase],
          score: newScore,
        });
      } else if (newScore >= 20 && possibleArgs.includes('cobol case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, 'cobol case'],
          questions: [...questions, stringToCobolCase],
          score: newScore,
        });
      } else if (newScore >= 25 && possibleArgs.includes('macro case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, 'macro case'],
          questions: [...questions, stringToMacroCase],
          score: newScore,
        });
      } else if (newScore >= 30 && possibleArgs.includes('1337 case') === -1) {
        this.setState({
          possibleArgs: [...possibleArgs, '1337 case'],
          questions: [...questions, stringToLeetCase],
          score: newScore,
        });
      } else {
        this.setState({
          score: newScore,
        });
      }

      this.createQuestion();
    } else {
      // Store scores locally for scoreboard
      const oldHighScores = JSON.parse(localStorage.getItem('highScore'));
      let newHighScores;
      if (oldHighScores) {
        newHighScores = [...oldHighScores, score]
          .sort((a, b) => b - a)
          .slice(0, 5);
      } else {
        newHighScores = [score];
      }

      localStorage.setItem('highScore', JSON.stringify(newHighScores));

      this.setState({
        hasStarted: false,
        isGameOver: true,
        scores: newHighScores,
      });
    }
  }

  render() {
    const {
      hasStarted,
      isGameOver,
      question,
      score,
      scores,
      timeLeft,
    } = this.state;

    return (
      <PageLayout meta={homeMeta}>
        <Title />
        {!hasStarted && scores ? <ScoreBoard scores={scores} /> : null}
        {hasStarted ? (
          <PlayBoard
            question={question}
            score={score}
            timer={timeLeft}
            validateAnswer={this.validateAnswer.bind(this)}
          />
        ) : (
          <input type="submit" onClick={this.startGame} value="Let's Play" />
        )}
        {isGameOver && <GameOver score={score} />}
      </PageLayout>
    );
  }
}

export default Index;
