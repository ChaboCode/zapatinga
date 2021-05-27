import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './styles/CartItem.css';

import {
    API_PATH,
    INCREMENT_CART_ITEM_COUNT,
    SUBSTRACT_CART_ITEM_COUNT,
} from '../constants';
import { cartSubstract, cartIncrease } from '../actions';

function CartItem(props) {
    const { cart, cartSubstract, cartIncrease, item } = props;

    const [counter, setCounter] = useState(item.count - 0);

    const handleSubstract = (e) => {
        const jwt = localStorage.getItem('jwt');
        const params = new URLSearchParams();
        params.append('entry_id', item.entry_id);

        if (!jwt) return false;

        jwt &&
            axios({
                method: 'post',
                url: API_PATH + SUBSTRACT_CART_ITEM_COUNT,
                data: params,
            });

        cartSubstract({
            entry_id: item.entry_id,
        });

        setCounter(counter - 1);
    };

    const handleIncrease = (event) => {
        const jwt = localStorage.getItem('jwt');
        const params = new URLSearchParams();
        params.append('entry_id', item.entry_id);

        if (!jwt) return false;

        jwt &&
            axios({
                method: 'post',
                url: API_PATH + INCREMENT_CART_ITEM_COUNT,
                data: params,
            });

        cartIncrease({
            entry_id: item.entry_id,
        });

        setCounter(counter + 1);
    };

    return (
        <div className="cart-item">
            <div className="cart-image">
                <img src={item.image} />
            </div>
            <span className="cart-model">{item.model}</span>
            <div className="cart-count">
                <button
                    className="cart-add-substract"
                    onClick={handleSubstract}
                >
                    -
                </button>
                <span className="cart-counter">{item.count}</span>
                <button className="cart-add-substract" onClick={handleIncrease}>
                    +
                </button>
            </div>
            <span className="item-price">${item.price * counter}</span>
        </div>
    );
}

const mapDispatchToProps = {
    cartSubstract,
    cartIncrease,
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
