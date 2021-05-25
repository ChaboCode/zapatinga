import React from 'react';
import './styles/Header.css';

import NavItem from './NavItem';
import AccountNav from './AccountNav';

function Header() {
    return (
        <header>
            <div className="header-left">
                <span className="header__title">ZAPATINGA</span>
                <NavItem link="/populares">Populares</NavItem>
                <NavItem link="/ofertas">Ofertas</NavItem>
            </div>

            <div className="header-right">
                <AccountNav className="header__right" />
            </div>
        </header>
    );
}

export default Header;
