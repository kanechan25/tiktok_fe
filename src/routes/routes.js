import OnlyHeader from '../layouts/OnlyHeaderLayout/Default';
import Home from '../bodypages/Home/Home';
import Following from '../bodypages/Following/Following';
import Upload from '../bodypages/Upload/Upload';
import Profile from '../bodypages/Profile/Profile';
import Live from '../bodypages/Live/Live';
import User from 'src/bodypages/User/User';
import Message from 'src/bodypages/Message/Message';
import Coin from 'src/bodypages/Coin/Coin';
import Setting from 'src/bodypages/Setting/Setting';
import Feedback from 'src/bodypages/Feedback/Feedback';
import config from '../config/index';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.message, component: Message },
    { path: config.routes.profile, component: Profile, layout: OnlyHeader },
    { path: config.routes.user, component: User, layout: OnlyHeader },
    { path: config.routes.setting, component: Setting, layout: OnlyHeader },
    { path: config.routes.feedback, component: Feedback, layout: OnlyHeader },
    { path: config.routes.coin, component: Coin, layout: OnlyHeader },
];

export const privateRoutes = [];
