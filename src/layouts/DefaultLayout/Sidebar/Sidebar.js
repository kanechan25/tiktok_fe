import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import config from '../../../config';
import styles from './Sidebar.module.scss';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import Suggested from '../../../components/Suggested/Suggested';
import {
    HomeIcon,
    HomeIconActive,
    GroupUserIcon,
    GroupUserIconActive,
    LiveIcon,
    LiveIconActive,
} from '../../../components/Icons/Icons';
import * as userServices from '../../../services/userServices';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followedUsers, setFollowedUsers] = useState([]);

    useEffect(() => {
        const fetchSuggestedUsers = async () => {
            try {
                const suggestedUsers = await userServices.getSuggestedUserService();
                const followedUsers = await userServices.getFollowedUserService();
                setSuggestedUsers(suggestedUsers.data);
                setFollowedUsers(followedUsers.data);
            } catch (error) {
                alert(error);
            }
        };
        fetchSuggestedUsers();
    }, []);
    return (
        <aside className={cx('wrapper-sidebar')}>
            <div className={cx('wrapper-navbar')}>
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
            </div>
            <Suggested label="Suggested Accounts" data={suggestedUsers} />
            <Suggested label="Following Accounts" data={followedUsers} />
        </aside>
    );
}

export default Sidebar;
