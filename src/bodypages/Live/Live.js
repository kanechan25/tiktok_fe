import { useEffect, useState, useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './Live.scss';
import AppContext from 'src/components/Context/AppContext';
import BeAbout2 from '../BeAbout2/BeAbout2';

const cx = classNames.bind(styles);
function Live() {
    const myContext = useContext(AppContext);
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        setIsLogin(myContext.isLogin);
        let isDataLogin = localStorage.getItem('loginTiktokData');
        if (isDataLogin) {
            setIsLogin(true);
        }
    }, [myContext.isLogin]);
    const liveDataComponent = {
        loggedin: 'LIVE feature is going to release! Thanks for stopping by here.',
        nonlogin: 'Please log in to Tiktok to start LIVE!',
        btntext: 'LIVE',
    };
    return (
        <div className={cx('wrapper-live')}>
            <BeAbout2 isLogin={isLogin} data={liveDataComponent} />
        </div>
    );
}

export default Live;
