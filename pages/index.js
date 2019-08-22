import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import {
  stringToCamelCase,
  stringToKebabCase,
  stringToSnakeCase
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
      hasStarted: false,
      score: 0,
      startTimer: false,
      timeLeft: 5
    };
  }

  startGame(event) {
    event.preventDefault();

    this.setState({
      hasStarted: true
    });
    this.createQuestion();
  }

  createQuestion() {
    clearInterval(this.timer);

    const questions = [stringToCamelCase, stringToKebabCase, stringToSnakeCase];
    const argument = ['camel case', 'kebab case', 'snake case'];
    const questionNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const argumentNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    this.setState({
      question: questions[questionNum](argument[argumentNum]),
      timeLeft: 5
    });

    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.countDown();
      if (this.state.timeLeft === 0) {
        clearInterval(this.timer);
        this.timeOutQuiz();
      }
    }, 1000);
  }

  countDown() {
    this.setState({
      timeLeft: this.state.timeLeft - 1
    });
  }

  timeOutQuiz() {
    const { question } = this.state;
    if (!question.isCorrect) {
      this.createQuestion();
    } else {
      this.setState({
        hasStarted: false,
        score: 0,
        startTimer: false,
        timeLeft: 5
      });
    }
  }

  validateAnswer(question) {
    const { score } = this.state;
    clearInterval(this.timer);
    if (question) {
      this.setState({
        score: score + 1
      });
      this.createQuestion();
    } else {
      this.setState({
        score: 0,
        hasStarted: false
      });
    }
  }

  render() {
    const { hasStarted, question, score, timeLeft } = this.state;
    console.log({ timeLeft });
    return (
      <PageLayout meta={homeMeta}>
        <h1>Just-in_case</h1>
        <p>When the case matches the case, click the case. OK?</p>
        <input type="submit" onClick={this.startGame} />
        {hasStarted ? (
          <h2 onClick={() => this.validateAnswer(question.isCorrect)}>
            {question.case}
          </h2>
        ) : null}
        <h2>{score}</h2>
      </PageLayout>
    );
  }
}

export default Index;
