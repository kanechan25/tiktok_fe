import { useEffect, useState, useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './Profile.scss';
import AppContext from 'src/components/Context/AppContext';
import BeAbout2 from '../BeAbout2/BeAbout2';

const cx = classNames.bind(styles);
function Profile() {
    const userDataComponent = {
        loggedin: 'User profile feature is going to release! Thanks for stopping by here.',
        nonlogin: 'Please log in to Tiktok to continue discovering other features!',
        btntext: 'User Profile',
    };
    const myContext = useContext(AppContext);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        setIsLogin(myContext.isLogin);
        let isDataLogin = localStorage.getItem('loginTiktokData');
        if (isDataLogin) {
            setIsLogin(true);
        }
    }, [myContext.isLogin]);
    return (
        <div className={cx('wrapper-user')}>
            <BeAbout2 isLogin={isLogin} data={userDataComponent} />
        </div>
    );
}

export default Profile;
