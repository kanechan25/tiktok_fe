import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaperPlane, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const MENU_SHARE_LIST = [
    {
        icon: <FontAwesomeIcon icon={faCode} className="embed-share" />,
        iconClass: 'embed-icon',
        title: 'Embed',
    },
    {
        icon: <FontAwesomeIcon icon={faPaperPlane} className="sending-share" />,
        iconClass: 'sending-icon',
        title: 'Send to friends',
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} className="fb-share" />,
        iconClass: 'fb-icon',
        title: 'Share to Facebook',
    },
    {
        icon: <FontAwesomeIcon icon={faWhatsapp} className="wa-share" />,
        iconClass: 'wa-icon',
        title: 'Share to WhatsApp',
    },
    {
        icon: <FontAwesomeIcon icon={faLink} className="link-share" />,
        iconClass: 'link-icon',
        title: 'Copy link',
    },
];
