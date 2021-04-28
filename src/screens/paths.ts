import {HomeScreen} from './HomeScreen';
import {GalleryScreenComplete} from './GalleryScreenComplete';

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
        component: GalleryScreenComplete,
    },
];

type Page = {
    link: string,
    label: string
    exact?: boolean,
    component: React.FC,
    removeFromNav?: boolean
}