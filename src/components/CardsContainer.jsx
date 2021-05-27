import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/CardsContainer.css';

import Card from './Card';

import { API_PATH, GET_ZAPATOS } from '../constants';

function CardsContainer(props) {
    // Step 1. Init state
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.data) {
            setData(props.data);
        } else {
            // Step 2. GET tryhard-server/getZapatos.php -> state
            axios({
                method: 'get',
                url: API_PATH + GET_ZAPATOS,

                headers: {
                    'Content-Type': 'application/json',
                },

                params: {
                    season: props.season,
                },
            }).then((result) => {
                result.status === 200 && setData(result.data);
            });
        }
    }, [props.data]);

    // Step 3. Generate Cards with the data
    const cards = data.map((shoe) => {
        return (
            <Card
                key={shoe.id}
                id={shoe.id}
                model={shoe.model}
                img={shoe.image}
                season={shoe.season}
                price={shoe.price}
            />
        );
    });

    //Step 4. Render
    return (
        <section className="cards-container">
            <div className="cards-container">{cards}</div>
        </section>
    );
}

export default CardsContainer;
