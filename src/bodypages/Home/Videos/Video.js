import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import AccountItem from './AccountItem';
import { nFormatter } from '../../../assets/function/nFormat';

const cx = classNames.bind(styles);

function Video({ data, uservideodata }) {
    // console.log('usevideo is: ', uservideodata);
    return (
        <div className={cx('wrapper-slice-video')}>
            <div className={cx('video-container')}>
                <div className={cx('video-avatar')}>
                    <img
                        className={cx('avatar')}
                        src={uservideodata.avatar}
                        alt={uservideodata.full_name}
                    />
                </div>
                <div className={cx('video-main')}>
                    <div className={cx('video-header')}>
                        <div className={cx('header-info')}>
                            <div className={cx('header-info-user')}>
                                <div className={cx('header-info-acc')}>
                                    <div className={cx('header-info-data')}>
                                        <img
                                            className={cx('avatar')}
                                            src={uservideodata.avatar}
                                            alt={uservideodata.full_name}
                                        />
                                        <AccountItem data={uservideodata} />
                                    </div>
                                </div>
                                <div className={cx('header-info-desc')}>
                                    {data.desc}
                                    <span className={cx('header-info-hashtag')}>
                                        {data.hashtag}
                                    </span>
                                </div>
                                <div className={cx('header-info-music')}>
                                    <FontAwesomeIcon
                                        className={cx('music-icon')}
                                        icon={faMusic}
                                    />
                                    {data.music}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('video-body')}>
                        <video className={cx('video')} width="300" height="530" controls>
                            <source src={data.url} type="video/mp4" />
                        </video>
                        <div className={cx('video-interact')}>
                            <div className={cx('video-like')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                <span className={cx('text')}>{nFormatter(data.like, 1)}</span>
                            </div>
                            <div className={cx('video-cmt')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                                <span className={cx('text')}>{nFormatter(data.cmt, 1)}</span>
                            </div>
                            <div className={cx('video-share')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                                <span className={cx('text')}>{nFormatter(data.share, 1)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('following-status')}>
                    <button className={cx('status-btn')}>Follow</button>
                </div>
            </div>
        </div>
    );
}

export default Video;
