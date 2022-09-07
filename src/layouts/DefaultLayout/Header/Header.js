import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import styles from './Header.scss';
import { MENU_NONLOGIN_LIST, MENU_LOGGEDIN_LIST } from './MenuItemList';

import images from '../../../assets/img/images';
import Menu from '../../../components/Popper/Menu/Menu';
import { InboxIcon, InboxIconActive, MessageIcon } from '../../../components/Icons/Icons';
import Image from '../../../components/Images/Images';
import Search from '../../../layouts/Components/Search/Search';
import config from '../../../config/index';
import Login from '../../../layouts/Components/Login/Login';
import AppContext from 'src/components/Context/AppContext';
import Inbox from 'src/components/Inbox/Inbox';

const cx = classNames.bind(styles);

function Header() {
    const myContext = useContext(AppContext);

    const [login, setLogin] = useState(localStorage.getItem('loginTiktokData') ? true : false);
    const [urlAvatar, setUrlAvatar] = useState(() => {
        if (localStorage.getItem('loginTiktokData')) {
            const loginTiktokData = JSON.parse(localStorage.getItem('loginTiktokData'));
            return loginTiktokData.imageUrl;
        } else {
            return '';
        }
    });
    const [inbox, setInbox] = useState(false);
    const inboxRef = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (inboxRef.current && !inboxRef.current.contains(event.target)) {
                setInbox(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [inboxRef]);

    useEffect(() => {
        setLogin(myContext.isLogin);
        let isDataLogin = localStorage.getItem('loginTiktokData');
        if (isDataLogin) {
            setLogin(true);
        }
    }, [myContext.isLogin]);

    //handle logic
    const handleOpenInbox = () => {
        setInbox(!inbox);
    };
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(`You have just clicked on change language to ${menuItem.title}`);
                break;
            default:
        }
    };

    const handleLogin = (loginData) => {
        setUrlAvatar(loginData.imageUrl);
        setLogin(loginData.isLogin);
    };

    const handleLogout = (isLogout) => {
        localStorage.removeItem('loginTiktokData');
        localStorage.removeItem('userTiktokData');
        setLogin(!isLogout);
    };

    return (
        <header className={cx('wrapper-header')}>
            <div className={cx('container-header container')}>
                <div className={cx('inner row')}>
                    <div className={cx('left-content col-lg-4 col-md-2 col-4')}>
                        <div className={cx('logo')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                <img
                                    className={cx('logo-img')}
                                    src={images.logoFull}
                                    alt="Tiktok"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={cx('center-content col-lg-4 col-md-5 col-1')}>
                        <Search />
                    </div>
                    <div className={cx('right-content col-lg-4 col-md-5 col-7')}>
                        {login ? (
                            <div className={cx('already-login')}>
                                <a
                                    href={config.routes.upload}
                                    target={'__blank'}
                                    className={cx('upload')}
                                >
                                    <button
                                        className={cx('btn btn-light right-btn upload-btn')}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={cx('upload-plus-icon')}
                                        />
                                        <span className={cx('upload-btn-text')}>Upload</span>
                                    </button>
                                </a>
                                <Tippy content={'Message'}>
                                    <a
                                        href="/message"
                                        target={'__blank'}
                                        className={cx('message')}
                                    >
                                        <MessageIcon
                                            className={'message-icon right-item'}
                                            width={'32px'}
                                            height={'32px'}
                                        />
                                    </a>
                                </Tippy>

                                <div className={cx('inbox')} onClick={handleOpenInbox}>
                                    {inbox ? (
                                        <InboxIconActive
                                            className={'inbox-icon right-item'}
                                            width={'38px'}
                                            height={'38px'}
                                        />
                                    ) : (
                                        <InboxIcon
                                            className={'inbox-icon right-item'}
                                            width={'38px'}
                                            height={'38px'}
                                        />
                                    )}
                                    <div className={'inbox-number'}>18</div>
                                    {inbox ? (
                                        <div className={'inbox-showing'} ref={inboxRef}>
                                            <Inbox />
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                </div>

                                <Menu
                                    items={MENU_LOGGEDIN_LIST}
                                    onChange={handleMenuChange}
                                    handleLogout={handleLogout}
                                >
                                    <Image
                                        className={cx('user-avatar')}
                                        src={urlAvatar}
                                        alt="img"
                                        fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1663610619807746.jpeg?x-expires=1659153600&x-signature=XNtEkI0N0OrJ8dBXqFbpEs9mOPk%3D"
                                    />
                                </Menu>
                            </div>
                        ) : (
                            <div className={cx('non-login')}>
                                <a
                                    href={config.routes.upload}
                                    target={'__blank'}
                                    className={cx('upload')}
                                >
                                    <button
                                        className={cx('btn btn-light right-btn upload-btn')}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            className={cx('upload-plus-icon')}
                                        />
                                        <span className={cx('upload-btn-text')}>Upload</span>
                                    </button>
                                </a>
                                <Login handleLogin={handleLogin} />
                                <Menu items={MENU_NONLOGIN_LIST} onChange={handleMenuChange}>
                                    <button className={cx('see-more')}>
                                        <FontAwesomeIcon
                                            icon={faEllipsisVertical}
                                            className={cx('see-more-icon')}
                                        />
                                    </button>
                                </Menu>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
