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
            <footer>
                &copy; Zapatinga 2021. Todos los derechos reservados. Sa&aacute;l Ch&aacute;vez S&aacute;nchez 4oA CBTis 262
            </footer>
        </>
    );
}

export default Home;
