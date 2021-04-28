import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import * as GalleryCards from '../components/GalleryCard';

const useStyles = makeStyles((theme: Theme) => ({
    galleryScreen: {},
}));

export const GalleryScreenComplete: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.galleryScreen}>
        <GalleryCards.Card1/>
        <GalleryCards.Card2/>
        <GalleryCards.Card3/>
        <GalleryCards.Card4/>
        <GalleryCards.Card5/>
        <GalleryCards.Card6/>
        <GalleryCards.Card7/>
    </div>;
};