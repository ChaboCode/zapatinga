import React from 'react';
import './Home.css';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

function Home() {
    return (
        <>
            <Header />
            <SearchBar />
            <Navigation />
        </>
    );
}

export default Home;
