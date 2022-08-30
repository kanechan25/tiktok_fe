import { useState, useContext, useMemo } from 'react';
import classNames from 'classnames/bind';
import styles from './Suggested.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import AppContext from '../Context/AppContext';

const cx = classNames.bind(styles);

function Suggested({ label, data }) {
    const myContext = useContext(AppContext);

    const lessData = data.slice(0, 5);
    useMemo(() => myContext, [myContext]);
    useMemo(() => data, [data]);
    const [more, setMore] = useState(false);
    const handleShow = () => {
        setMore(!more);
    };

    if (more === false) {
        return (
            <div className={cx('wrapper-suggest')}>
                <p className={cx('label')}>{label}</p>
                {lessData.map((user) => (
                    <AccountItem key={+user.id} data={user} />
                ))}
                <p className={cx('more')} onClick={handleShow}>
                    See all
                </p>
            </div>
        );
    } else {
        return (
            <div className={cx('wrapper-suggest')}>
                <p className={cx('label')}>{label}</p>
                {data.map((user) => (
                    <AccountItem key={+user.id} data={user} />
                ))}
                <p className={cx('more')} onClick={handleShow}>
                    See less
                </p>
            </div>
        );
    }
}

Suggested.prototype = {
    label: PropTypes.string.isRequired,
};

export default Suggested;
