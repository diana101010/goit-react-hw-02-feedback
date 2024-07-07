import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <ul>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleFeedback('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleFeedback('bad')}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedbackOptions;
