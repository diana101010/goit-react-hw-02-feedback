import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

class SectionTitle extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <div>
        <FeedbackOptions handleFeedback={this.handleFeedback} />
        {total === 0 ? (
          <Notification message="There is no feedbacck" />
        ) : (
          <Statistics good={good} neutral={neutral} bad={bad} />
        )}
      </div>
    );
  }
}

export default SectionTitle;
