import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.scss';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import {
    HomeIcon,
    HomeIconActive,
    GroupUserIcon,
    GroupUserIconActive,
    LiveIcon,
    LiveIconActive,
} from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper-sidebar')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserIconActive />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
