import classNames from 'classnames/bind';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ data }) {
    return (
        <div className={cx('wrapper-slice-video')}>
            <div className={cx('video-container')}>
                <div className={cx('video-header')}>
                    <div className={cx('header-info')}>
                        <div className={cx('header-info-avatar')}>IMG</div>
                        <div className={cx('header-info-user')}>
                            <div className={cx('header-info-acc')}>
                                tranthanh123
                                <span className={cx('header-info-name')}>Tran Thanh ne</span>
                            </div>
                            <div className={cx('header-info-desc')}>
                                This is a funny video
                                <span className={cx('header-info-hashtag')}>#tranthanh</span>
                            </div>
                            <div className={cx('header-info-')}>Music - Pretty Boy</div>
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
                        <div className={cx('video-like')}>
                            Icon
                            <span>114.8k</span>
                        </div>
                        <div className={cx('video-cmt')}>
                            Icon
                            <span>125</span>
                        </div>
                        <div className={cx('video-share')}>
                            Icon
                            <span>98</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
