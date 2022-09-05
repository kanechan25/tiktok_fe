import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import AccountItem from './AccountItem';
import { nFormatter } from '../../../assets/function/nFormat';
import { MENU_SHARE_LIST } from './ShareItemList';
import MenuCSS from '../../../components/Popper/MenuCSS/MenuCSS';
import { useState } from 'react';
import useElementOnScreen from 'src/hooks/useElementOnScreen';

const cx = classNames.bind(styles);

function Video({ data, uservideodata }) {
    const [follow, setFollow] = useState(false);
    const handleFollowing = () => {
        setFollow(!follow);
    };
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });
    const handleOnFullVisible = () => {
        if (containerRef.current) {
            // console.log(`Video ${data.id} FULL IN VIEW`, containerRef.current);
            containerRef.current.play();
        }
    };
    const handleOnInvisible = () => {
        if (containerRef.current) {
            // console.log(`Video ${data.id} INVISIBLE`, containerRef.current);
            containerRef.current.pause();
        }
    };

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
                        <video
                            className={cx('video')}
                            ref={containerRef}
                            width="300"
                            height="530"
                            controls
                            loop
                            muted
                        >
                            {isVisible ? handleOnFullVisible() : handleOnInvisible()}
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
                            <MenuCSS items={MENU_SHARE_LIST} placement="bottom">
                                <div className={cx('video-share')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                                    <span className={cx('text')}>
                                        {nFormatter(data.share, 1)}
                                    </span>
                                </div>
                            </MenuCSS>
                        </div>
                    </div>
                </div>
                <div className={cx('following-status')} onClick={handleFollowing}>
                    {follow === false ? (
                        <button className={cx('follow')}>Follow</button>
                    ) : (
                        <button className={cx('following')}>Following</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Video;
