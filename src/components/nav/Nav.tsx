import React from 'react';
import MediaQuery from 'react-responsive';
import {BigNav} from './BigNav';
import {HamburgerNav} from './HamburgerNav';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar} from '@material-ui/core';
import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    toolbar: {
        backgroundColor: theme.palette.background.paper,
        color: 'black',
        height: 70,
        alignItems: 'center',
        boxShadow: '0px 3px 15px rgba(100, 100, 100, 0.29)',
        position: 'relative',
        zIndex: 4,
        padding: 0
    }
}));

export const Nav: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <header className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <MediaQuery minWidth={1124}>
                            <BigNav/>
                        </MediaQuery>
                        <MediaQuery maxWidth={1124}>
                            <HamburgerNav/>
                        </MediaQuery>
                    </Toolbar>
                </AppBar>
            </header>
        </>
    );
};