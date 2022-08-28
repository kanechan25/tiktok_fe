import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <div className="btn-login-test">
                <h1>This is Home page</h1>
            </div>
        </div>
    );
}

export default Home;
