import classNames from 'classnames/bind';
import Button from '../../../components/Button/Button';
import styles from './Menu.scss';
import PropTypes from 'prop-types';
import { GoogleLogout } from 'react-google-login';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, handleLogout }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    const ids = data.id;
    const onClickLogout = () => {
        (function () {
            handleLogout({
                isLogout: true,
            });
        })();
    };
    if (ids === 'btn-logout') {
        return (
            <div id={ids}>
                <GoogleLogout
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                        <button
                            className="wrapper-btn menu-item"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faSignOut} />
                            </span>
                            <span className="title">{data.title}</span>
                        </button>
                    )}
                    onLogoutSuccess={onClickLogout}
                />
            </div>
        );
    } else {
        return (
            <Button
                className={classes}
                id={ids}
                leftIcon={data.icon}
                to={data.to}
                onClick={onClick}
            >
                {data.title}
            </Button>
        );
    }
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
