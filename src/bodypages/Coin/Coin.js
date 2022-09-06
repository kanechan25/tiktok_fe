import { useEffect, useState, useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './Coin.scss';
import AppContext from 'src/components/Context/AppContext';
import BeAbout2 from '../BeAbout2/BeAbout2';

const cx = classNames.bind(styles);
function Coin() {
    const coinDataComponent = {
        loggedin: 'GET COIN feature is going to release! Thanks for stopping by here.',
        nonlogin: 'Please log in to Tiktok to continue discovering other features!',
        btntext: 'GET COIN',
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
        <div className={cx('wrapper-coin')}>
            <BeAbout2 isLogin={isLogin} data={coinDataComponent} />
        </div>
    );
}

export default Coin;
