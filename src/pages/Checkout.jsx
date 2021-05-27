import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Header from '../components/Header';
import './Checkout.css';

function Checkout() {
    return (
        <>
            <Header />
            <div class="checkout-message">
                <h1>Gracias por tu compra</h1>
                <Link to="/">
                    <button class="go-home">Volver al inicio</button>
                </Link>
            </div>
        </>
            
    )
}

export default Checkout;
