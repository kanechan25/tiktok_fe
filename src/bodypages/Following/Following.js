import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from '../Home/Home.scss';
import './Following.scss';
import { FOLLOWING_VIDEO_LIST } from './FVideoItems';
import Video from '../Home/Videos/Video';
import Login from 'src/layouts/Components/Login/Login';
import * as userServices from '../../services/userServices';
import AppContext from 'src/components/Context/AppContext';

const cx = classNames.bind(styles);
// const numVideo = FOLLOWING_VIDEO_LIST.length;
const userFirst = {
    id: 1,
    first_name: 'Kane',
    last_name: 'Chan',
    full_name: 'Kane Chan',
    nick_name: 'kanechan0205',
    bio: 'Full-stack web dev',
    tick: true,
    is_video: true,
    followed: true,
    followings: 105,
    followers: 2541254,
    likes: 201475,
    avatar: 'https://raw.githubusercontent.com/kanechan25/tiktok_be/main/src/assets/img_avatar/p100.jpg',
};

function Following() {
    const myContext = useContext(AppContext);

    const [isLogin, setIsLogin] = useState(false);

    const [userIsVideoList, setUserIsVideoList] = useState([]);

    useEffect(() => {
        setIsLogin(myContext.isLogin);
    }, [myContext.isLogin]);

    useEffect(() => {
        const fetchIsVideodUsers = async () => {
            try {
                let followedUsers = await userServices.getFollowedUserService();
                setUserIsVideoList(followedUsers.data);
                // console.log('following user: ', followedUsers.data);
            } catch (error) {
                alert(error);
            }
        };
        fetchIsVideodUsers();
        let isDataLogin = localStorage.getItem('loginTiktokData');
        if (isDataLogin) {
            setIsLogin(true);
        }
    }, []);

    const handleLogin = (loginData) => {
        setIsLogin(loginData.isLogin);
        // console.log('Login: ', loginData.isLogin);
    };

    if (isLogin) {
        return (
            <div className={cx('wrapper-home')} id="home-page">
                <div className="home-container">
                    {FOLLOWING_VIDEO_LIST.map((video, index) => (
                        <div className={cx('video-wrapper')} key={video.id}>
                            <Video
                                forU={false}
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
    } else {
        return (
            <div className="following-wrapper">
                <div className="following-text">
                    Please log in to Tiktok to follow creators, like videos, and view comments.
                </div>
                <div className="login-to-follow">
                    <Login handleLogin={handleLogin} />
                </div>
            </div>
        );
    }
}

export default Following;
