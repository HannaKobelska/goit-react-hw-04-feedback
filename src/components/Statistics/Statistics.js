import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={styles.statistics_item}>Good: {good}</p>
    <p className={styles.statistics_item}>Neutral: {neutral}</p>
    <p className={styles.statistics_item}>Bad: {bad}</p>
    <p className={styles.statistics_item_total}>Total: {total}</p>
    <p className={styles.statistics_item_total}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;