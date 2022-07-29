import OnlyHeader from '~/components/Layout/OnlyHeaderLayout/Default';
import Home from '~/bodypages/Home/Home';
import Following from '~/bodypages/Following/Following';
import Upload from '~/bodypages/Upload/Upload';
import Profile from '~/bodypages/Profile/Profile';

import routesConfig from '~/config/routes';

export const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: null },
    { path: routesConfig.profile, component: Profile, layout: OnlyHeader },
];

export const privateRoutes = [];
