import React, { Component } from 'react';
import TextQuestion from './TextQuestion';
import CheckBoxQuestion from './CheckBoxQuestion';

class FormRenderer extends Component {
  state = {
    currentIndex: 0,
    answerMap: {},
    isPrevious: false,
    isNext: false,
  };
  nextQuestion = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
  };
  previousQuestion = () => {
    this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
  };

  isPrevious = () => {
    return this.state.currentIndex <= 0;
  };

  isNext = () => {
    const question = this.props.questions[this.state.currentIndex];

    if (question.is_required) {
      return !(
        this.state.currentIndex < this.props.questions.length - 1 &&
        !!this.state.answerMap[question.id] &&
        this.state.answerMap[question.id] &&
        this.state.answerMap[question.id].length > question.min_char_length
      );
    } else if (
      this.state.answerMap[question.id] &&
      this.state.answerMap[question.id].length > question.min_char_length
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleTextChange = e => {
    const currentQuestion = this.props.questions[this.state.currentIndex];
    const answerMap = { ...this.state.answerMap, [currentQuestion.id]: e.target.value };
    this.setState({ answerMap });
  };

  handleCheckBoxChange = e => {};

  finishQuestion = () => {
    this.props.setFormComplete();
  };

  getButton = () => {
    if (this.state.currentIndex < this.props.questions.length - 1) {
      return (
        <button disabled={this.isNext()} onClick={this.nextQuestion} className={this.sytles.buttonContent}>
          Next
        </button>
      );
    }
    const question = this.props.questions[this.state.currentIndex];
    return (
      <button
        disabled={!!!this.state.answerMap[question.id]}
        onClick={this.finishQuestion}
        className={this.sytles.buttonContent}
      >
        Submit
      </button>
    );
  };

  sytles = {
    formConatiner: 'ke-form__form-renderer__form-container',
    buttonContainer: 'ke-form__form-renderer__button-container',
    rootContainer: 'ke-form__form-renderer__root-container',
    buttonContent: 'ke-form__form-renderer__button-content',
  };

  renderQuestions = question => {
    const currentQuestion = this.props.questions[this.state.currentIndex];
    switch (question.question_type) {
      case 'TextQuestion':
        return (
          <div className={this.sytles.formConatiner}>
            <TextQuestion
              answer={this.state.answerMap[currentQuestion.id] || ''}
              question={question}
              handleTextChange={this.handleTextChange}
            />
          </div>
        );

      case 'CheckBoxQuestion':
        return <CheckBoxQuestion question={question} handleCheckBoxChange={this.handleCheckBoxChange} />;
      default:
        return <div>Could not find question type</div>;
    }
  };
  render() {
    return (
      <div className={this.sytles.rootContainer}>
        {this.renderQuestions(this.props.questions[this.state.currentIndex])}
        <div className={this.sytles.buttonContainer}>
          <button disabled={this.isPrevious()} onClick={this.previousQuestion} className={this.sytles.buttonContent}>
            Previous
          </button>
          {this.getButton()}
        </div>
      </div>
    );
  }
}

export default FormRenderer;
