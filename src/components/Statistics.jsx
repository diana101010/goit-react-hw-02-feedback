import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  };
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <ul style={{ flexDirection: 'column' }}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total:{total}</p>
        </li>
        <li>
          <p>Positive feedback : {positiveFeedback}% </p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
