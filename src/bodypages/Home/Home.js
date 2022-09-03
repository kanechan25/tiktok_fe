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
    bio: 'Full-stack web dev',
    tick: true,
    is_video: true,
    followed: true,
    followings: 73,
    followers: 1319683,
    likes: 136811,
    avatar: 'https://raw.githubusercontent.com/kanechan25/tiktok_be/main/src/assets/img_avatar/p1.jpg',
};
const usedIndexes = new Set();

function RandomUniqueFromTo(max, min) {
    try {
        const newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        if (usedIndexes.has(newNumber)) {
            return RandomUniqueFromTo(max, min);
        } else {
            usedIndexes.add(newNumber);
            return newNumber;
        }
    } catch (error) {
        alert('Run out of loaded video, do you want to load more?');
        return min;
    }
}

function Home() {
    const [idVideo, setIdVideo] = useState(1);
    const [userIsVideoList, setUserIsVideoList] = useState([]);

    useEffect(() => {
        const fetchIsVideodUsers = async () => {
            let userIsVideo = await userServices.getIsVideoUserService(numVideo);
            setUserIsVideoList(userIsVideo.data);
        };
        fetchIsVideodUsers();
    }, []);

    const handleScroll = () => {
        const newNumVideoId = RandomUniqueFromTo(numVideo, 1);
        setIdVideo(newNumVideoId);
    };
    return (
        <div className={cx('wrapper-home')} onClick={handleScroll}>
            <div className="home-container">
                <div className={cx('video-wrapper')} key={VIDEO_LIST[idVideo - 1].id}>
                    <Video
                        data={VIDEO_LIST[idVideo - 1]}
                        uservideodata={
                            userIsVideoList[idVideo - 1]
                                ? userIsVideoList[idVideo - 1]
                                : userFirst
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
