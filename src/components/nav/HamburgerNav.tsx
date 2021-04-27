import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import {PAGES} from '../../screens/paths';
import {NavLink} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    closeButton: {
        position: 'relative',
        float: 'right',
        top: '8px',
    },
    tabs: {
        flexDirection: 'row',
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline',
        paddingLeft: '16px',
        '& a': {
            padding: '10px 0',
        },
    },
    tab: {
        height: '100%',
        color: 'black',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    hover: {
        '&:hover': {
            color: theme.palette.primary.main,
            background: 'none',
        },
    },
    selected: {
        color: theme.palette.primary.main,
        '&:after': {
            content: '""',
            width: '15px',
            height: '4px',
            marginLeft: '10px',
            background: theme.palette.primary.main,
        },
    },
    logo: {
        marginLeft: '20px',
    },
    contact: {
        margin: 0,
    },
    contactUs: {
        textDecoration: 'underline',
    },
}));

export const HamburgerNav: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <div className={classes.tabs}>
            <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <div
                    className={classes.list}
                    role="presentation"
                >
                    <Button onClick={toggleDrawer(false)} className={`${classes.closeButton} ${classes.hover}`}>
                        <CloseIcon/>
                    </Button>
                    <List className={classes.links}>
                        {PAGES.map(page => {
                            return (<NavLink exact={page.exact} to={page.link} activeClassName={classes.selected}
                                             className={`${classes.tab} ${classes.hover}`}
                                             key={page.label} onClick={toggleDrawer(false)}>
                                    <Typography variant="h5">{page.label}</Typography>
                                </NavLink>
                            );
                        })}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};