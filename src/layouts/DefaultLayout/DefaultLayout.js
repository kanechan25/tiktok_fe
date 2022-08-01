import classNames from 'classnames/bind';
import styles from './DefaultLayout.scss';
import PropTypes from 'prop-types';
import Header from '~/layouts/DefaultLayout/Header/Header';
import Sidebar from '~/layouts/DefaultLayout/Sidebar/Sidebar';
import Footer from '~/layouts/DefaultLayout/Footer/Footer';

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
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
