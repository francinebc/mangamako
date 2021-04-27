import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import 'regenerator-runtime/runtime';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';
import {theme} from './globalStyles';

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Router>,
    document.getElementById('root'),
);