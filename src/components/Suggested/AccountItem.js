import classNames from 'classnames/bind';
import styles from './Suggested.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '../Images/Images';
import { Wrapper as PopperWrapper } from '../../components/Popper/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

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
                        <Image
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={data.full_name}
                        />
                        <div className={cx('info')}>
                            <div className={cx('name')}>
                                <span>{data.nick_name}</span>
                                {data.tick && (
                                    <FontAwesomeIcon
                                        className={cx('check')}
                                        icon={faCheckCircle}
                                    />
                                )}
                            </div>
                            <span className={cx('username')}>{data.full_name}</span>
                        </div>
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
