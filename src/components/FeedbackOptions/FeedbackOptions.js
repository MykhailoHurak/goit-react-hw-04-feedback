import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onFeedbackName }) {
    return <div className={css.FeedbackOptions__buttonBox}>
        {options.map(option => (
            <button
                key={option}
                type="button"
                className={css.FeedbackOptions__button}
                onClick={() => onFeedbackName(option)}
            >
                {option}
            </button>
        ))}
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onFeedbackName: PropTypes.func.isRequired,
};

export default FeedbackOptions;