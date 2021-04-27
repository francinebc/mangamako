import React from 'react';
import example from '../images/Mangamako3.jpeg';
import {Typography} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        textAlign: 'center',
    },
    imageSection: {
        position: 'relative',
        color: 'white',
    },
    headerImage: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover',
    },
    heading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    flexDescription: {
        display: 'flex',
        justifyContent: 'center',
    },
    description: {
        margin: '30px',
        width: '40vw',
    },
}));

export const HomeScreen: React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.imageSection}>
            <img src={example} className={classes.headerImage}/>
            <Typography variant="h1" className={classes.heading}>Mangamako</Typography>
        </div>
        <div className={classes.flexDescription}>
            <Typography variant="body1" className={classes.description}>
                Mangamako is a hut in Te Uruwera, about a three hike from the road.
                The track starts in pine forestry full of wild pig, then continues down the mangamako stream to a 6 bedroom hut up a sharp bank.
                They say a wahine was murdered in a bivvy near the hut, but I didn't see any ghosts.
            </Typography>
        </div>
    </div>;
};