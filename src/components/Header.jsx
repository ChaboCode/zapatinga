import React from 'react';
import './styles/Header.css';

import NavItem from './NavItem';

function Header() {
    return (
        <header>
            <span className="header__title">ZAPATINGA</span>

            <NavItem link="/populares">Populares</NavItem>

            <NavItem link="/ofertas">Ofertas</NavItem>
        </header>
    );
}

export default Header;
