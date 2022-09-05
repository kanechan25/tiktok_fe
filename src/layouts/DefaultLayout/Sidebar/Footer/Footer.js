import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';
import { FOOTER_LIST } from './FooterItemList';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer-sidebar')}>
            {FOOTER_LIST.map((items, index) => (
                <div className={cx('wrapper-footer-sidebar')} key={index}>
                    {items.map((item, index) => (
                        <span className={cx('item-wrapper')} key={index}>
                            <Link to={`/`} className={cx('item')}>
                                {item}
                            </Link>
                        </span>
                    ))}
                </div>
            ))}
            <span className={cx('copyright')}>© 2022 TikTok</span>
        </div>
    );
}

export default Footer;
