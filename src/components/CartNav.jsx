import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './styles/CartNav.css';

import { cartOnAdd } from '../actions';
import { API_PATH, GET_CART_COUNT } from '../constants.js';
import NavItem from './NavItem';

function CardNav(props) {
    const { cart, cartOnAdd } = props;

    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        jwt &&
            axios({
                method: 'get',
                url: API_PATH + GET_CART_COUNT,

                headers: {
                    'Content-Type': 'application/json',
                },

                params: {
                    jwt: jwt,
                },
            }).then((result) => {
                if (result.data === 'Expired token') {
                    localStorage.removeItem('jwt');
                }

                result.data.map((cart_item) => {
                    return cartOnAdd({
                        new_item: cart_item,
                    });
                });
            });
    }, [jwt, cartOnAdd]);

    return <NavItem link="/cart">Carrito: {cart.length} productos</NavItem>;
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = {
    cartOnAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardNav);
