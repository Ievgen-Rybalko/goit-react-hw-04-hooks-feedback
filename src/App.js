import { useState } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Statistics/Notification';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeed = good + neutral + bad;

  const onLeaveFeedback = buttonId => {
    //console.log('buttonId', buttonId, typeof(buttonId));

    switch (buttonId) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onFeedbackButton={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeed === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
