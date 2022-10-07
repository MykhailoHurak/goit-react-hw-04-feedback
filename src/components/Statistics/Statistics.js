import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, totalFeedback, positiveFeedback }) { 
    return (
        <ul className={css.Statistics}>
            <li className={css.Statistics__item}>
                Good: 
                <span className={css.Statistics__itemValue}> {good}</span>
            </li>
            <li className={css.Statistics__item}>
                Neutral: 
                <span className={css.Statistics__itemValue}> {neutral}</span>
            </li>
            <li className={css.Statistics__item}>
                Bad: 
                <span className={css.Statistics__itemValue}> {bad}</span>
            </li>
            <li className={css.Statistics__item}>
                Total: 
                <span className={css.Statistics__itemValue}> {totalFeedback}</span>
            </li>
            <li className={css.Statistics__item}>
                Positive feedback: 
                <span className={css.Statistics__itemValue}> {positiveFeedback}%</span>
            </li>
        </ul>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}

export default Statistics;