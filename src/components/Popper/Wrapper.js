import classNames from 'classnames/bind';
import styles from './Popper.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper-popper', className)}>{children}</div>;
}

export default Wrapper;
