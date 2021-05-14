import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import WebFont from 'webfontloader';

import './index.css';

import Home from './pages/Home';
import Popular from './pages/Popular';
import Offers from './pages/Offers';

import reducer from './reducers'

// Setp 1. Load fonts
WebFont.load({
    google: {
        families: ['Ubuntu:400', 'Zen Dots', 'Open Sans:400', 'sans-serif'],
    },
});

// Step 2. Redux
const initialState = {
    'search': '',
    'searchFocus': false,
};
const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() || compose;
const store = createStore(reducer, initialState, composeEnchacers);

// Step 3. Render
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/populares" component={Popular} />
            <Route path="/ofertas" component={Offers} />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
