import styles from './Statistics.module.css';

const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);

export default Notification;
