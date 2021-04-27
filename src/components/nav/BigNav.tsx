import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import {PAGES} from '../../screens/paths';
import {Typography} from '@material-ui/core';

const selectedTabStyle = (theme: Theme) => ({
    color: theme.palette.primary.main,
    '&:after': {
        content: '""',
        width: '40px',
        height: '4px',
        background: theme.palette.primary.main,
    },
});

const useStyles = makeStyles((theme: Theme) => ({
    tabs: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        marginRight: '20vw',
    },
    tab: {
        width: '100%',
        height: '100%',
        color: 'black',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    tabHover: {
        '&:hover': selectedTabStyle(theme),

    },
    selected: selectedTabStyle(theme),
}));

export const BigNav: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.tabs}>
                {PAGES.map(page => {
                    return (!page.removeFromNav &&
                        <NavLink exact={page.exact} to={page.link} activeClassName={classes.selected}
                                 className={`${classes.tab} ${classes.tabHover}`}
                                 key={page.label}>
                            <Typography variant="h5">{page.label}</Typography>
                        </NavLink>
                    );
                })}
            </div>
        </>
    );
};

