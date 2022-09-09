import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../Images/Images';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nFormatter } from '../../../assets/function/nFormat';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <Link to={`/@${data.nick_name}`} className={cx('wrapper-account-preview')}>
            <div className={cx('header-prv')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                <button className={cx('btn follow-btn')}>
                    <span className={cx('follow-btn-text')}>Follow</span>
                </button>
            </div>
            <div className={cx('info-prv')}>
                <div className={cx('name')}>
                    <span>{data.nick_name}</span>
                    {data.tick && (
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    )}
                </div>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
            <div className={cx('about-prv')}>
                <div className={cx('about-spec follow')}>
                    <strong>{nFormatter(data.followers, 2)}</strong>
                    <span className="text-about"> Followers</span>
                </div>
                <div className={cx('about-spec like')}>
                    <strong>{nFormatter(data.likes, 1)}</strong>
                    <span className="text-about"> Likes</span>
                </div>
            </div>
        </Link>
    );
}
AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountPreview;
