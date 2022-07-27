import classNames from 'classnames/bind';
import styles from './Home.scss'

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <h1>Home content here</h1>
        </div>
    );
}

export default Home;
