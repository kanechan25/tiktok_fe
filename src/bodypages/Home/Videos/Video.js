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
import nofollow from 'src/assets/img/nofollow.png';
import following from 'src/assets/img/following.png';

const cx = classNames.bind(styles);

function Video({ forU, data, uservideodata }) {
    const [follow, setFollow] = useState(forU ? false : uservideodata.followed);
    const handleFollowing = () => {
        let isDataLogin = localStorage.getItem('loginTiktokData');
        if (isDataLogin) {
            setFollow(!follow);
        } else {
            alert('PLEASE LOG IN TO FOLLOW CREATORS AND VIEW COMMENTS!');
        }
    };
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    });
    const handleOnFullVisible = () => {
        if (containerRef.current) {
            containerRef.current.play();
        }
    };
    const handleOnInvisible = () => {
        if (containerRef.current) {
            containerRef.current.pause();
        }
    };

    const [likeNum, setLikeNum] = useState(data.like);
    const [isLike, setIsLike] = useState(false);
    const handleCmtInteract = () => {};
    const handleShareInteract = () => {};
    const handleLikeInteract = (e) => {
        const textEle = e.target;
        if (textEle.tagName === 'path') {
            // const svg = textEle.parentNode;
            // const interactVideo = svg.parentNode;
            handleLikeAction();
        }
        if (textEle.tagName === 'svg') {
            // const interactVideo = textEle.parentNode;
            handleLikeAction();
        }
    };
    const handleLikeAction = () => {
        setIsLike(!isLike);
        if (!isLike) {
            setLikeNum(data.like + 1);
        } else {
            setLikeNum(data.like);
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
                        <video className={cx('video')} ref={containerRef} controls loop muted>
                            {isVisible ? handleOnFullVisible() : handleOnInvisible()}
                            <source src={data.url} type="video/mp4" />
                        </video>
                        <div className={cx('video-interact')}>
                            <div
                                className={cx('video-interact-user')}
                                onClick={handleLikeInteract}
                            >
                                <FontAwesomeIcon
                                    className={cx(
                                        isLike === false ? 'interact-icon' : 'interact-liked',
                                    )}
                                    icon={faHeart}
                                />
                                <span className={cx('interact-text')}>
                                    {nFormatter(likeNum, 1)}
                                </span>
                            </div>
                            <div
                                className={cx('video-interact-user')}
                                onClick={handleCmtInteract}
                            >
                                <FontAwesomeIcon
                                    className={cx('interact-icon')}
                                    icon={faCommentDots}
                                />
                                <span className={cx('interact-text')}>
                                    {nFormatter(data.cmt, 1)}
                                </span>
                            </div>
                            <MenuCSS items={MENU_SHARE_LIST} placement="bottom">
                                <div
                                    className={cx('video-interact-user')}
                                    onClick={handleShareInteract}
                                >
                                    <FontAwesomeIcon
                                        className={cx('interact-icon')}
                                        icon={faShare}
                                    />
                                    <span className={cx('interact-text')}>
                                        {nFormatter(data.share, 1)}
                                    </span>
                                </div>
                            </MenuCSS>
                        </div>
                    </div>
                </div>
                <div className={cx('following-status')} onClick={handleFollowing}>
                    <div className={cx('following-btn')}>
                        {follow === false ? (
                            <button className={cx('follow')}>Follow</button>
                        ) : (
                            <button className={cx('following')}>Following</button>
                        )}
                    </div>
                    <div className={cx('following-btn-mini')}>
                        {follow === false ? (
                            <button className={cx('follow')}>
                                <img className={cx('icon-fl')} src={nofollow} alt="FL" />
                            </button>
                        ) : (
                            <button className={cx('following')}>
                                <img className={cx('icon-fl')} src={following} alt="FD" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
