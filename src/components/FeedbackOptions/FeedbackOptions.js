import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onFeedbackButton }) => {
  return (
    <div className={styles.button__list}>
      <ul>
        {options.map(option => {
          return (
            <button
              key={option}
              onClick={() => onFeedbackButton(option)}
              className={styles.button}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackOptions;
