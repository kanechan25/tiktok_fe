import OnlyHeader from '~/layouts/OnlyHeaderLayout/Default';
import Home from '~/bodypages/Home/Home';
import Following from '~/bodypages/Following/Following';
import Upload from '~/bodypages/Upload/Upload';
import Profile from '~/bodypages/Profile/Profile';

import config from '~/config/index';

export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: null },
    { path: config.routes.profile, component: Profile, layout: OnlyHeader },
];

export const privateRoutes = [];
