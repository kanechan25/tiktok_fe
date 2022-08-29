import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

export const MENU_NONLOGIN_LIST = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: '中文',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Portugal',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語',
                },

                {
                    type: 'language',
                    code: 'kr',
                    title: '한국',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Россия',
                },
                {
                    type: 'language',
                    code: 'at',
                    title: 'Österreich',
                },

                {
                    type: 'language',
                    code: 'tr',
                    title: 'Türkiye',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweiz',
                },
                {
                    type: 'language',
                    code: 'mx',
                    title: 'México',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italia',
                },
                {
                    type: 'language',
                    code: 'tw',
                    title: '台灣',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
export const MENU_LOGGEDIN_LIST = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/user-profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: '中文',
                },
                {
                    type: 'language',
                    code: 'sp',
                    title: 'Español',
                },
                {
                    type: 'language',
                    code: 'pt',
                    title: 'Portugal',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: '日本語',
                },

                {
                    type: 'language',
                    code: 'kr',
                    title: '한국',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Français',
                },
                {
                    type: 'language',
                    code: 'ru',
                    title: 'Россия',
                },
                {
                    type: 'language',
                    code: 'at',
                    title: 'Österreich',
                },

                {
                    type: 'language',
                    code: 'tr',
                    title: 'Türkiye',
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweiz',
                },
                {
                    type: 'language',
                    code: 'mx',
                    title: 'México',
                },
                {
                    type: 'language',
                    code: 'it',
                    title: 'Italia',
                },
                {
                    type: 'language',
                    code: 'tw',
                    title: '台灣',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        id: 'btn-logout',
        separate: true,
    },
];
