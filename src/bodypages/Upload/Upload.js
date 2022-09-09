import { useEffect, useState, useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './Upload.scss';
import AppContext from 'src/components/Context/AppContext';
import BeAbout2 from '../BeAbout2/BeAbout2';

const cx = classNames.bind(styles);
function Upload() {
    const uploadDataComponent = {
        loggedin: 'UPLOAD feature is going to release! Thanks for stopping by here.',
        nonlogin: 'Please log in Tiktok to start UPLOAD!',
        btntext: 'UPLOAD',
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
        <div className={cx('wrapper-upload')}>
            <BeAbout2 isLogin={isLogin} data={uploadDataComponent} />
        </div>
    );
}

export default Upload;
