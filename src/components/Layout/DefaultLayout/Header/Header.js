import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/Popper';
import styles from './Header.scss';
import images from '~/assets/img/images';
import AccountItem from '~/components/AccountItem/AccountItem';
import Menu from '~/components/Popper/Menu/Menu';
import { MENU_ITEMS_LIST } from './MenuItemList';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                alert(`You clicked on change language to ${menuItem.title}`);
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper-header')}>
            <div className={cx('container-header container')}>
                <div className={cx('inner row')}>
                    <div className={cx('left-content col-lg-4 col-md-2 col-4')}>
                        <div className={cx('logo')}>
                            <img
                                className={cx('logo-img')}
                                src={images.logoFull}
                                alt="Tiktok"
                            />
                        </div>
                    </div>
                    <div className={cx('center-content col-lg-4 col-md-5 col-1')}>
                        <Tippy
                            interactive
                            visible={searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>Accounts</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <form className={cx('search-container')}>
                                <input
                                    className={cx('search-input')}
                                    type="text"
                                    placeholder="Search accounts and videos"
                                />
                                <button className={cx('search-clear')}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                                <span className={cx('search-split')}></span>
                                <button className={cx('search-btn')} type="submit">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 48 48"
                                        fill="rgba(22, 24, 35, 0.34)"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
                                        ></path>
                                    </svg>
                                </button>
                            </form>
                        </Tippy>
                    </div>
                    <div className={cx('right-content col-lg-4 col-md-5 col-7')}>
                        <a href="/upload" className={cx('upload')}>
                            <button className={cx('btn btn-light right-btn upload-btn')}>
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className={cx('upload-plus-icon')}
                                />
                                <span className={cx('upload-btn-text')}>Upload</span>
                            </button>
                        </a>
                        <button className={cx('btn right-btn login-btn')}>
                            <span className={cx('login-btn-text')}>Log In</span>
                        </button>
                        <Menu items={MENU_ITEMS_LIST} onChange={handleMenuChange}>
                            <button className={cx('see-more')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className={cx('see-more-icon')}
                                />
                            </button>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
