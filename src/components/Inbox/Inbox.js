import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Inbox.scss';
import NtfcnItem from '../Notification/NtfcnItem';
import { NOTIFICATION_LIST } from './InboxItem';

const cx = classNames.bind(styles);
function Inbox() {
    const [type, setType] = useState(0);
    const preventPropagation = (event) => {
        event.stopPropagation();
    };
    let actionList = document.querySelectorAll('.btn-action');
    const handleClickInbox = (event) => {
        actionList.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
        setType(+event.target.id);
    };

    return (
        <div className={cx('wrapper-inbox')} onClick={preventPropagation}>
            <div className={cx('container-inbox')}>
                <div className={cx('inbox-header')}>
                    <div className={cx('header-heading')}>Notification</div>
                    <div className={cx('header-action')}>
                        <div>
                            <button
                                className={cx('btn btn-action action-all active')}
                                id={0}
                                onClick={handleClickInbox}
                            >
                                All Activity
                            </button>
                            <button
                                className={cx('btn btn-action action-like')}
                                id={1}
                                onClick={handleClickInbox}
                            >
                                Like
                            </button>
                            <button
                                className={cx('btn btn-action action-cmt')}
                                id={2}
                                onClick={handleClickInbox}
                            >
                                Comments
                            </button>
                        </div>
                        <div>
                            <button
                                className={cx('btn btn-action action-mention')}
                                id={3}
                                onClick={handleClickInbox}
                            >
                                Mentions and tags
                            </button>
                            <button
                                className={cx('btn btn-action action-follow')}
                                id={4}
                                onClick={handleClickInbox}
                            >
                                Followers
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('inbox-body')}>
                    <div className={cx('body-wrapper')}>
                        <div className={cx('body-heading')}>Previous</div>
                        <div className={cx('body-notification')}>
                            <div className={cx('notification')}>
                                <NtfcnItem data={NOTIFICATION_LIST} type={type} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inbox;
