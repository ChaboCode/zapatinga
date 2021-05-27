import React from 'react';

import './Zapato.css';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import ZapatoView from '../components/ZapatoView';

function Zapato(props) {
    // Router params
    const {
        params: { zapatoID },
    } = props;

    return (
        <>
            <Header />
        <div class="zapato-view__container">
            <ZapatoView zapatoID={zapatoID} router={props.router} />
        </div>
        </>
    );
}

export default Zapato;
