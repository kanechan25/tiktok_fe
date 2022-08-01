import classNames from 'classnames/bind';
import styles from './Live.scss';

const cx = classNames.bind(styles);
function Live() {
    return (
        <div className={cx('wrapper-live')}>
            <h1>Live content here</h1>
        </div>
    );
}

export default Live;
