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
  stringToUppercase
} from '../helpers/optionGenerator';

const homeMeta = {
  title: 'Case Game',
  description: 'Can you be the case master?'
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
      isGameOver: false,
      hasStarted: false,
      score: 0,
      startTimer: false,
      timeLeft: 3
    };
  }

  componentDidMount() {
    const highScores = JSON.parse(localStorage.getItem('highScore'));

    if (highScores) {
      this.setState({
        scores: highScores
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
      score: 0
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
    const { score } = this.state;
    clearInterval(this.timer);

    const questions = [stringToCamelCase, stringToKebabCase, stringToSnakeCase];

    const argument = ['camel case', 'kebab case', 'snake case'];
    if (score >= 5 && !argument.includes('pascal case')) {
      argument.push('pascal case');
      questions.push(stringToPascalCase);
    }
    if (score >= 10 && !argument.includes('flat case')) {
      argument.push('flat case');
      questions.push(stringToFlatcase);
    }
    if (score >= 15 && !argument.includes('upper case')) {
      argument.push('upper case');
      questions.push(stringToUppercase);
    }
    if (score >= 20 && !argument.includes('cobol case')) {
      argument.push('upper case');
      questions.push(stringToCobolCase);
    }
    if (score >= 25 && !argument.includes('macro case')) {
      argument.push('1337 case');
      questions.push(stringToMacroCase);
    }
    if (score >= 30 && !argument.includes('1337 case')) {
      argument.push('1337 case');
      questions.push(stringToLeetCase);
    }

    const questionNum = Math.floor(Math.random() * questions.length);
    const argumentNum = Math.floor(Math.random() * argument.length);

    this.setState({
      question: questions[questionNum](argument[argumentNum]),
      timeLeft: 3
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
      timeLeft: this.state.timeLeft - 1
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
        timeLeft: 3
      });
    }
  }

  /**
   * Triggered when a user clicks an answer.
   * If the user is correct, increment score and repeat.
   * If the user is incorrect, set game over.
   *
   * @param {*} question Bool used to determine if the answer is correct
   * @memberof Index
   */
  validateAnswer(question) {
    const { score } = this.state;
    clearInterval(this.timer);
    if (question) {
      this.setState({
        score: score + 1
      });
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
        scores: newHighScores
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
      timeLeft
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
