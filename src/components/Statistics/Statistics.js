import styles from './Statistics.module.css';

const Statistics = ({ bad, neutral, good, total, positivePercentage }) => (
  <div>
    <p className={styles.statictics__item}>Good: {good}</p>
    <p className={styles.statictics__item}>Neutral: {neutral}</p>
    <p className={styles.statictics__item}>Bad: {bad}</p>
    <p className={styles.statictics__item}>Total: {total}</p>
    <p className={styles.statictics__item}>
      Positive feedback: {positivePercentage}%{' '}
    </p>
  </div>
);

export default Statistics;
