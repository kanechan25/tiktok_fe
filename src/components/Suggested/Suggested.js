import classNames from 'classnames/bind';
import styles from './Suggested.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function Suggested({ label, data }) {
    // console.log(users);
    return (
        <div className={cx('wrapper-suggest')}>
            <p className={cx('label')}>{label}</p>
            {data.map((user) => (
                <AccountItem key={+user.id} data={user} />
            ))}
            <p className={cx('more')}>See all</p>
        </div>
    );
}

Suggested.prototype = {
    label: PropTypes.string.isRequired,
};

export default Suggested;
