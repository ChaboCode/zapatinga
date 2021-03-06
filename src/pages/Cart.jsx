import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import { Classes, Button } from '@blueprintjs/core';

import { API_PATH, CLEAN_CART } from '../constants';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

import './Cart.css';

function Cart(props) {
    const { cart, } = props;
    let [renderItems, setRenderItems] = useState(
        cart.map((cartItem) => <CartItem item={cartItem} />),
    );
    let [totalPrice, setTotalPrice] = useState(0);

    const handleCheckout = () => {
        const params = new URLSearchParams();
        params.append('jwt', localStorage.getItem('jwt'));
        axios({
            method: 'post',
            url: API_PATH + CLEAN_CART,
            data: params,
        }).then(() => {
            props.router.push('/checkout');  
        })
    }

    useEffect(() => {
        // All the stuff needed is already on state.cart
        setRenderItems(
            cart.map((cartItem) => {
                if (cartItem.entry_id) return <CartItem key={cartItem.entry_id} item={cartItem} />;
            }),
        );

        setTotalPrice((() => {
            let price = 0;
            for(let item of cart) {
                price += item.price - 0;
            }
            return price;
        })());
    }, [cart]);

    return (
        <>
            <Header />
            <div className="cart">
                {renderItems}
                    <Button
                        intent="secondary"
                        large={true}
                        text={`Comprar carrito: $${totalPrice}`}
                        onClick={handleCheckout}
                    />
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, null)(Cart);

