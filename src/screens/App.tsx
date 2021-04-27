import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Nav} from '../components/nav/Nav';
import {NotFound} from './NotFound';
import {PAGES} from './paths';
import {applyGlobalStyles} from '../globalStyles';

const App: React.FC = () => {

    applyGlobalStyles();

    return <>
        <CssBaseline/>
        <Nav/>
        <Switch>
            {PAGES.map(page => {
                return (
                    <Route exact={page.exact} path={page.link} key={page.label}
                           render={() => <page.component/>}/>);
            })}
            <Route><NotFound/></Route>
        </Switch>
    </>;
};

export default App;