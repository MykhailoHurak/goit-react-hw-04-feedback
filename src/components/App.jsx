import React from 'react';

import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  options = Object.keys(this.state); // [good, neutral, bad]
  
  handleFeedbackName = currentFeedback => {
    this.setState(previousState => {
      return { [currentFeedback]: previousState[currentFeedback] + 1 };
    });
  };

  countTotalFeedback = () => { 
    // return this.state.good + this.state.neutral + this.state.bad;
    return Object.values(this.state).reduce((total, element) => total + element, 0)
   };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>

        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={this.options}
            onFeedbackName={this.handleFeedbackName}
          />
        </Section>

        <Section title={"Statistics"}>
          {
            totalFeedback
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
            :
            <Notification message={"There is no feedback"} />
          }
        </Section>

      </Container>
    )
  }
};

export default App;