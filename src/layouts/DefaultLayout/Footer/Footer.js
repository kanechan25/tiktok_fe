import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

function Footer() {
    const handleUpTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <footer>
            <div className={cx('wrapper-footer')}>
                <button className={cx('up-top')} onClick={handleUpTop} id="up-top-btn">
                    <FontAwesomeIcon icon={faCircleChevronUp} className={cx('up-top-icon')} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
