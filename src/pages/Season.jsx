import React from 'react';
import './Home.css';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
import CardsContainer from '../components/CardsContainer';

function Season(props) {
    const { id } = props;

    return (
        <>
            <Header />
            <SearchBar />
            <Navigation mainElement={<CardsContainer season={id}/>}/>
        </>
    );
}

export default Season;

