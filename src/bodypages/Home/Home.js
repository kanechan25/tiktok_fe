import classNames from 'classnames/bind';
import styles from './Home.scss';
import { VIDEO_LIST } from './Videos/VideoItems';
import Video from './Videos/Video';
import { useState } from 'react';

const cx = classNames.bind(styles);

const usedIndexes = new Set();

function RandomUniqueFromTo(max, min) {
    try {
        // const [number, setNumber] = useState(max)

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
    const numVideo = VIDEO_LIST.length;

    const handleScroll = () => {
        const newNumVideoId = RandomUniqueFromTo(numVideo, 1);
        setIdVideo(newNumVideoId);
        console.log('new number after clicked: ', newNumVideoId);
    };
    return (
        <div className={cx('wrapper-home')} onClick={handleScroll}>
            <div className="home-container">
                <div className={cx('video-wrapper')} key={VIDEO_LIST[idVideo - 1].id}>
                    <Video data={VIDEO_LIST[idVideo - 1]} />
                </div>
            </div>
        </div>
    );
}

export default Home;
