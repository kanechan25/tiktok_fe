import OnlyHeader from '~/components/Layout/OnlyHeader/Default';
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Upload from '~/pages/Upload/Upload';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/profile', component: Upload, layout: OnlyHeader },
];
export const privateRoutes = [];
