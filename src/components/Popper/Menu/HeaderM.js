import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

function HeaderM({ title, onBack }) {
    return (
        <header className={cx('menu-header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} className={cx('back-icon')} />
            </button>
            <span className={cx('header-title')}>{title}</span>
        </header>
    );
}
HeaderM.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
export default HeaderM;
