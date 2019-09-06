import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import {
  stringToCamelCase,
  stringToFlatcase,
  stringToKebabCase,
  stringToLeetCase,
  stringToPascalCase,
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
      timeLeft: 3
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
    if (score >= 15 && !argument.includes('1337 case')) {
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
        timeLeft: 3
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

    return (
      <PageLayout meta={homeMeta}>
        <h1>Just-in_case</h1>
        <p>When the case matches the case, click the case. OK?</p>
        {hasStarted ? (
          <>
            <h2 onClick={() => this.validateAnswer(question.isCorrect)}>
              {question.case}
            </h2>
            <p>{timeLeft} seconds left</p>
            <h2>{score}</h2>
          </>
        ) : (
          <input type="submit" onClick={this.startGame} />
        )}
      </PageLayout>
    );
  }
}

export default Index;
