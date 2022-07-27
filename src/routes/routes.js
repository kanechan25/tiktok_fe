import OnlyHeader from '~/components/Layout/OnlyHeaderLayout/Default';
import Home from '~/bodypages/Home/Home';
import Following from '~/bodypages/Following/Following';
import Upload from '~/bodypages/Upload/Upload';
import Profile from '~/bodypages/Profile/Profile';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/profile', component: Profile, layout: OnlyHeader },
];
export const privateRoutes = [];
