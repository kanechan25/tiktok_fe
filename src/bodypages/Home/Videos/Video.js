import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ data, uservideodata }) {
    // console.log('usevideo is: ', uservideodata);
    return (
        <div className={cx('wrapper-slice-video')}>
            <div className={cx('video-container')}>
                <div className={cx('video-header')}>
                    <div className={cx('header-info')}>
                        <div className={cx('header-info-avatar')}>
                            <img
                                className={cx('avatar')}
                                src={uservideodata.avatar}
                                alt={uservideodata.full_name}
                            />
                        </div>
                        <div className={cx('header-info-user')}>
                            <div className={cx('header-info-acc')}>
                                {uservideodata.nick_name}
                                <span className={cx('header-info-name')}>
                                    {uservideodata.full_name}
                                </span>
                            </div>
                            <div className={cx('header-info-desc')}>
                                {data.desc}
                                <span className={cx('header-info-hashtag')}>
                                    {data.hashtag}
                                </span>
                            </div>
                            <div className={cx('header-info-music')}>
                                <FontAwesomeIcon className={cx('music-icon')} icon={faMusic} />
                                {data.music}
                            </div>
                        </div>
                    </div>
                    <div className={cx('following-status')}>
                        <button className={cx('btn status-btn')}>Follow</button>
                    </div>
                </div>
                <div className={cx('video-body')}>
                    <video className={cx('video')} width="300" height="530" controls>
                        <source src={data.url} type="video/mp4" />
                    </video>
                    <div className={cx('video-interact')}>
                        <div className={cx('interactable video-like')}>
                            <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
                            <span className={cx('like-text')}>{data.like}</span>
                        </div>
                        <div className={cx('interactable video-cmt')}>
                            <FontAwesomeIcon className={cx('cmt-icon')} icon={faCommentDots} />
                            <span className={cx('cmt-text')}>{data.cmt}</span>
                        </div>
                        <div className={cx('interactable video-share')}>
                            <FontAwesomeIcon className={cx('share-icon')} icon={faShare} />
                            <span className={cx('share-text')}>{data.share}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
