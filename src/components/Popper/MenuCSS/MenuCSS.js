// import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import MenuCSSItem from './MenuCSSItem';
import styles from './MenuCSS.module.scss';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);
const defaultFn = () => {};
const fnClick = () => {};

function MenuCSS({
    children,
    items = [],
    placement = 'bottom-end',
    hideOnClick = false,
    onClick = fnClick,
    onChange = defaultFn,
    handleLogout,
    ...passedProps
}) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <MenuCSSItem
                    key={index}
                    data={item}
                    onClick={onClick}
                    handleLogout={handleLogout}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <>
            <Tippy
                {...passedProps}
                interactive
                // visible
                hideOnClick={hideOnClick}
                offset={[10, 8]}
                delay={[0, 200]}
                placement={placement}
                render={renderResult}
            >
                {children}
            </Tippy>
        </>
    );
}

MenuCSS.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default MenuCSS;
