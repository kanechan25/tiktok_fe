import classNames from 'classnames/bind';
import styles from './Sidebar.scss'


const cx = classNames.bind(styles);



function Sidebar() {
    return (
        <aside className={cx('wrapper-sidebar')}>
            <h2>Sidebar of page</h2>
        </aside>
    );
}

export default Sidebar;
