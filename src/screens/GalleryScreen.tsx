import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    galleryScreen: {},
    card: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        height: '40vh',
        width: '60vh',
        objectFit: 'cover',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        margin: '20px',
    },
}));

export const GalleryScreen: React.FC = () => {
    const classes = useStyles();

    return <div></div>;
};