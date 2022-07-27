import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer>
            <div className={cx('wrapper-footer')}>
                <div className={cx('footer-container')}>Footer</div>
                <button className={cx('up-top')}>
                    <FontAwesomeIcon icon={faCircleChevronUp} className={cx('up-top-icon')} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
