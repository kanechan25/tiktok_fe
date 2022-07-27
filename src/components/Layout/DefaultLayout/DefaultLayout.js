import classNames from 'classnames/bind';
import styles from './DefaultLayout.scss';

import Header from '~/components/Layout/DefaultLayout/Header/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar/Sidebar';
import Footer from '~/components/Layout/DefaultLayout/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                {/* Main Home */}
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
