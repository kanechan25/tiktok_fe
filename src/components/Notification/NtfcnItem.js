import classNames from 'classnames/bind';
import styles from './NtfcnItem.scss';

const cx = classNames.bind(styles);

function RenderUserNotification(users) {
    if (users.length === 1) {
        return users.map((user, index) => <span key={index}>{user}</span>);
    } else {
        return users.map((user, index) =>
            index !== users.length - 1 ? (
                <span key={index}>{user}, </span>
            ) : (
                <span key={index}>{user}</span>
            ),
        );
    }
}

function NtfcnItem({ data, type }) {
    let renderData = [];
    const filterData = (type) => {
        if (type === 0) {
            renderData = data;
        } else {
            data.filter(function (ntfcnData) {
                if (ntfcnData.type === type) {
                    renderData.push(ntfcnData);
                }
                return renderData;
            });
        }
    };
    filterData(type);

    return renderData.map((dataItem, index) => (
        <div className={cx('wrapper-ntfcn')} key={index}>
            <div className={cx('ntfcn-img')}>
                <img className={cx('img-user')} src={dataItem.imgUrl} alt="user" />
            </div>

            <div className={cx(dataItem.argmt ? 'ntfcn-content' : 'ntfcn-content argmt')}>
                <div className={cx('content-user')}>
                    {RenderUserNotification(dataItem.users)}
                </div>
                <div className={cx('text content-action')}>
                    <span className={cx('action')}>{dataItem.action}</span>
                    <span className={cx('date')}>{dataItem.date}</span>
                </div>
                <div className={cx('text content-reply')}>{dataItem.content}</div>
            </div>
            {dataItem.argmt ? (
                <div className={cx('ntfcn-argmt-img')}>
                    <img className={cx('img-argmt')} src={dataItem.imgArgmt} alt="user" />
                </div>
            ) : (
                <div className={cx('ntfcn-argmt-btn')}>
                    <button className={cx('btn argmt')}>
                        <span className={cx('btn-argmt-text')}>Follow Back</span>
                    </button>
                </div>
            )}
        </div>
    ));
}

export default NtfcnItem;
