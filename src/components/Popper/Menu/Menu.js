import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import styles from './Menu.scss';
import HeaderM from './HeaderM';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '../../../components/Popper/Popper';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = defaultFn,
    handleLogout,
    ...passedProps
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                    handleLogout={handleLogout}
                />
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <HeaderM title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const handleResetMenu = () => {
        // reset first page when you click outside
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <>
            <Tippy
                {...passedProps}
                interactive
                // visible
                hideOnClick={hideOnClick}
                offset={[10, 8]}
                delay={[0, 200]}
                placement="bottom-end"
                render={renderResult}
                onHide={handleResetMenu}
            >
                {children}
            </Tippy>
        </>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
