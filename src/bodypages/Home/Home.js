import classNames from 'classnames/bind';
import styles from './Home.scss';
import { VIDEO_LIST } from './Videos/VideoItems';
import Video from './Videos/Video';
import { useEffect, useState } from 'react';
import * as userServices from '../../services/userServices';

const cx = classNames.bind(styles);
const numVideo = VIDEO_LIST.length;
const userFirst = {
    id: 1,
    first_name: 'Khoa',
    last_name: 'Tran',
    full_name: 'Khoa Tran',
    nick_name: 'khoatran0205',
    tick: true,
    is_video: true,
    followed: true,
    followings: 73,
    followers: 2319683,
    likes: 201475,
    avatar: 'https://raw.githubusercontent.com/kanechan25/tiktok_be/main/src/assets/img_avatar/p1.jpg',
};

function Home() {
    // const [idVideo, setIdVideo] = useState(1);
    const [userIsVideoList, setUserIsVideoList] = useState([]);

    useEffect(() => {
        const fetchIsVideodUsers = async () => {
            let userIsVideo = await userServices.getIsVideoUserService(numVideo);
            setUserIsVideoList(userIsVideo.data);
        };
        fetchIsVideodUsers();
    }, []);

    return (
        <div className={cx('wrapper-home')} id="home-page">
            <div className="home-container">
                {VIDEO_LIST.map((video, index) => (
                    <div className={cx('video-wrapper')} key={video.id}>
                        <Video
                            forU={true}
                            data={video}
                            uservideodata={
                                userIsVideoList[video.id - 1]
                                    ? userIsVideoList[video.id - 1]
                                    : userFirst
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
