import React, { Component } from 'react';
import Header from './Header';
import FormRenderer from './Form/FormRenderer';
import getAppData from './services/AppService';
import ThankYou from './Thankyou';

import './stylesheet/app.css';

class App extends Component {
  state = {
    title: '',
    questions: [],
    isAPIResolved: false,
    isFormComplete: false,
  };
  componentDidMount() {
    getAppData().then(response => {
      this.setState({
        title: response.title,
        questions: response.questions,
        isAPIResolved: true,
      });
    });
  }

  styles = {
    mainContainer: 'ke-form__app-root__main-container',
  };

  setFormComplete = () => {
    this.setState({ isFormComplete: true });
  };

  getContent = () => {
    if (this.state.isAPIResolved && !this.state.isFormComplete) {
      return (
        <div className={this.styles.mainContainer}>
          <Header title={this.state.title} />
          <FormRenderer questions={this.state.questions} setFormComplete={this.setFormComplete} />
        </div>
      );
    } else if (this.state.isFormComplete) {
      return <ThankYou />;
    }
    return <div>Loading</div>;
  };
  render() {
    return <div>{this.getContent()}</div>;
  }
}

export default App;
