import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import WebFont from 'webfontloader';

import './index.css';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import Offers from './pages/Offers';
import Popular from './pages/Popular';
import Register from './pages/Register';
import Season from './pages/Season';
import Zapato from'./pages/Zapato';

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
    'logged': false,
    'cart': [],
};
const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchacers = reduxDev ? reduxDev() : compose;
const store = createStore(reducer, initialState, composeEnchacers);

// Step 3. Render
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/zapato/:zapatoID" component={Zapato} />
            <Route path="/login" component={(routeProps) => <Login {...routeProps} />} />
            <Route path="/register" component={(routeProps) => <Register {...routeProps} />} />
            <Route path="/cart" component={(routeProps) => <Cart {...routeProps} />} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/primaverano" component={() => <Season id="1"/>} />
            <Route path="/otono" component={() => <Season id="3"/>} />
            <Route path="/invernal" component={() => <Season id="2"/>} />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
