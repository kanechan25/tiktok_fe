import Menu from '../../components/Popper/Menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons';
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
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
function Upload() {
    return (
        <div>
            <h1>Upload</h1>
            <Menu items={MENU_ITEMS}>
                <ul>
                    <li>1. bim5d software </li>
                    <li>2. bim5d add-in</li>
                    <li>3. bim5d database management </li>
                </ul>
            </Menu>
        </div>
    );
}

export default Upload;
