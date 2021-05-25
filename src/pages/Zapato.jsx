import React from 'react';

import './Zapato.css';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ZapatoView from '../components/ZapatoView';

function Zapato(props) {
    // Router params
    const {
        params: {
            zapatoID
        }
    } = props;

    return (
        <>
            <Header />
            <SearchBar />
            <div class="zapato-view__container">
                <ZapatoView zapatoID={zapatoID} />
            </div>
        </>
    );
}

export default Zapato;
