import PropTypes from 'prop-types';
import css from './Container.module.css';

function Container({ children }) {
    return <div className={css.Container}>{children}</div>
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;