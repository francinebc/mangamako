import {HomeScreen} from './HomeScreen';
import {GalleryScreen} from './GalleryScreen';

export const PAGES: Page[] = [
    {
        link: '/',
        label: 'Home',
        component: HomeScreen,
        exact: true,
    },
    {
        link: '/gallery',
        label: 'Gallery',
        component: GalleryScreen,
    },
];

type Page = {
    link: string,
    label: string
    exact?: boolean,
    component: React.FC,
    removeFromNav?: boolean
}