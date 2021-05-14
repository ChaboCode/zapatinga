import React, { useState } from 'react';
import axios from 'axios';
import './styles/CardsContainer.css';

import Card from './Card';

import { API_PATH, GET_ZAPATOS } from '../constants';

function CardsContainer(props) {
    // Step 1. Init state
    const [data, setData] = useState([]);

    // Step 2. GET tryhard-server/getZapatos.php -> state
    axios({
        method: 'get',
        url: API_PATH + GET_ZAPATOS,

        headers: {
            'Content-Type': 'application/json',
        },

        data: {
            order: props.order,
        },
    }).then((result) => {
        result.status === 200 && setData(result.data);
    });

    // Step 3. Generate Cards with the data
    const cards = data.map((shoe) => {
        return (
            <Card
                key={shoe.id}
                model={shoe.model}
                img={shoe.image}
                season={shoe.season}
                price={shoe.price}
            />
        );
    });

    //Step 4. Render
    return <div className="cards-container">{cards}</div>;
}

export default CardsContainer;
