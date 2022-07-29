import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import styles from './Header.scss';
import images from '~/assets/img/images';
import Menu from '~/components/Popper/Menu/Menu';
import { MENU_NONLOGIN_LIST, MENU_LOGGEDIN_LIST } from './MenuItemList';
import { InboxIcon, MessageIcon } from '~/components/Icons/Icons';
import Image from '~/components/Images/Images';
import Search from '~/components/Layout/Components/Search/Search';
import routesConfig from '~/config/routes';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function Header() {
    const [login, setLogin] = useState(false);

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                alert(`You clicked on change language to ${menuItem.title}`);
                break;
            default:
        }
    };
    const handleLogin = () => {
        setLogin(!login);
    };

    return (
        <header className={cx('wrapper-header')}>
            <div className={cx('container-header container')}>
                <div className={cx('inner row')}>
                    <div className={cx('left-content col-lg-4 col-md-2 col-4')}>
                        <div className={cx('logo')}>
                            <Link to={routesConfig.home} className={cx('logo-link')}>
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
                                    href={routesConfig.upload}
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
                                <Tippy content={'Inbox'}>
                                    <div className={cx('inbox')}>
                                        <InboxIcon
                                            className={'inbox-icon right-item'}
                                            width={'38px'}
                                            height={'38px'}
                                        />
                                        <div className={'inbox-number'}>24</div>
                                    </div>
                                </Tippy>
                                <Menu items={MENU_LOGGEDIN_LIST} onChange={handleMenuChange}>
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://avatars.githubusercontent.com/u/85122363?v=4"
                                        alt="img"
                                        fallback="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1663610619807746.jpeg?x-expires=1659153600&x-signature=XNtEkI0N0OrJ8dBXqFbpEs9mOPk%3D"
                                    />
                                </Menu>
                            </div>
                        ) : (
                            <div className={cx('non-login')}>
                                <a
                                    href={routesConfig.upload}
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
                                <button
                                    className={cx('btn right-btn login-btn')}
                                    onClick={handleLogin}
                                >
                                    <span className={cx('login-btn-text')}>Log In</span>
                                </button>
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
