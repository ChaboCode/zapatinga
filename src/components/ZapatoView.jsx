import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Classes, Button } from '@blueprintjs/core';

import './styles/ZapatoView.css';

import {
    API_PATH,
    GET_ZAPATO_BY_ID,
    GET_SEASON_BY_SEASON_ID,
    ADD_ITEM_TO_CART,
} from '../constants';
import { cartOnAdd } from '../actions';

function ZapatoView(props) {
    const { cartOnAdd } = props;

    const [zapatoData, setZapatoData] = useState({ id: null });

    const getZapatoData = () => {
        axios({
            method: 'get',
            url: API_PATH + GET_ZAPATO_BY_ID,

            headers: {
                'Content-Type': 'application/json',
            },

            params: {
                zapato_id: props.zapatoID,
            },
        }).then((result) => {
            if (result.status !== 200) return null;

            setZapatoData(result.data);
        });
    };

    const saveToCart = () => {
        const jwt = localStorage.getItem('jwt');
        const params = new URLSearchParams();
        params.append('zapato_id', props.zapatoID);
        params.append('jwt', jwt);

        axios({
            method: 'post',
            url: API_PATH + ADD_ITEM_TO_CART,

            data: params,
        })
            .then((result) => props.router.push('/cart'))
            .catch((error) => alert(error));
    };

    const handleAddToCart = (e) => {
        console.log('xd');
        cartOnAdd({
            new_item: zapatoData,
        });

        saveToCart();
    };

    useEffect(() => {
        // Step 2. GET tryhard-server/getZapatoById.php if not defined
        zapatoData.id || getZapatoData();

        //eslint-disable-next-line
    }, [props.zapatoID, zapatoData.id]);

    return (
        <section className="zapato-display">
            <img
                className="zapato-image"
                src={zapatoData.image}
                alt="beautiful sapatillo"
            />
            <div className="zapato-info">
                <span className="zapato-info__model">{zapatoData.model}</span>
                <span className="zapato-info__season">
                    Temporada {zapatoData.season}
                </span>
                <span className="zapato-info__price">${zapatoData.price}</span>
                <div className="zapato-info__buy">
                    <Button
                        intent="primary"
                        large={true}
                        text="Comprar ahora"
                    />
                    <Button
                        intent="secondary"
                        large={true}
                        text="A&ntilde;adir al carrito"
                        onClick={handleAddToCart}
                    />
                </div>
            </div>
        </section>
    );
}

const mapDispatchToProps = {
    cartOnAdd,
};

export default connect(null, mapDispatchToProps)(ZapatoView);
