import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render(<Router history={createBrowserHistory()}>{routes}</Router>, document.getElementById('myApp'));