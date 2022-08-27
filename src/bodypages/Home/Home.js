import classNames from 'classnames/bind';
import styles from './Home.scss';
import Login from '../../layouts/Components/Login/Login';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <div className="btn-login-test">
                <Login />
            </div>
        </div>
    );
}

export default Home;
