import React from 'react';
import './styles/Card.css';

function Card(props) {
    return (
        <div className="card">
            <img
                className="card-image"
                src={props.img}
                alt="beautiful sapato"
            />
            <div className="card-info">
                <span className="card-title">{props.model}</span>
                <br />
                <span className="card-price">${props.price}</span>
            </div>
        </div>
    );
}

export default Card;
