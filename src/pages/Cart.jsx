import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import CartItem from '../components/CartItem';

import './Cart.css';

function Cart(props) {
    const { cart, } = props;
    let [renderItems, setRenderItems] = useState(
        cart.map((cartItem) => <CartItem item={cartItem} />),
    );

    useEffect(() => {
        // All the stuff needed is already on state.cart
        setRenderItems(
            cart.map((cartItem) => {
                if (cartItem.entry_id) return <CartItem key={cartItem.entry_id} item={cartItem} />;
            }),
        );
    }, [cart]);

    return (
        <>
            <Header />
            <div className="cart">{renderItems}</div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, null)(Cart);

