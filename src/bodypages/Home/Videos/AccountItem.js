import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import { Link } from 'react-router-dom';

import { Wrapper as PopperWrapper } from '../../../components/Popper/Popper';
import AccountPreview from '../../../components/Suggested/AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => (
        <div className={cx('account-detail-wrapper')} tabIndex="-1" {...props}>
            <div className={cx('account-detail')}>
                <PopperWrapper className={cx('detail-popper')}>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        </div>
    );
    return (
        <div>
            <Tippy
                interactive
                // visible
                delay={[800, 0]}
                render={renderPreview}
                placement="bottom"
                offset={[-42, 0]}
            >
                <div className={cx('account-items')}>
                    <Link to={`/@${data.nick_name}`} className={cx('wrapper-account-item')}>
                        <span className={cx('nickname')}>{data.nick_name}</span>
                        <span className={cx('username')}>{data.full_name}</span>
                    </Link>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
