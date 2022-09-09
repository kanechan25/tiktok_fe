import classNames from 'classnames/bind';
import ButtonCSS from './ButtonCSS/ButtonCSS';
import styles from './MenuCSS.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuCSSItem({ data, onClick, handleLogout }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    const ids = data.id;
    return (
        <ButtonCSS
            className={classes}
            id={ids}
            leftIcon={data.icon}
            leftIconClass={data.iconClass}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </ButtonCSS>
    );
}

MenuCSSItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuCSSItem;
