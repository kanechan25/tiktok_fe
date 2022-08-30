import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '../../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import styles from './Search.scss';

import { Wrapper as PopperWrapper } from '../../../components/Popper/Popper';
import AccountItem from '../../../components/AccountItem/AccountItem';
import { SearchIcon } from '../../../components/Icons/Icons';
import * as searchServices from '../../../services/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const result = await searchServices.searchServices(debounce, 6);
                setSearchResult(result.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleClickOutside = () => {
        setShowResult(false);
    };
    const handleChangeInput = (e) => {
        const searchValueInput = e.target.value;
        if (!searchValueInput.startsWith(' ')) {
            setSearchValue(searchValueInput);
        }
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={+result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleClickOutside}
        >
            <form className={cx('search-container')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => handleChangeInput(e)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('search-clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />
                )}
                <span className={cx('search-split')}></span>
                <button className={cx('search-btn')} type="submit">
                    <SearchIcon className={'search-icon'} />
                </button>
            </form>
        </HeadlessTippy>
    );
}

export default Search;
