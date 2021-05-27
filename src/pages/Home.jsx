import React from 'react';
import './Home.css';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';
import CardsContainer from '../components/CardsContainer';

function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <Navigation mainElement={(<CardsContainer />)} />
        </>
    );
}

export default Home;
