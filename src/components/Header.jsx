import React from 'react';
import { Link } from 'react-router';
import './styles/Header.css';

import NavItem from './NavItem';
import AccountNav from './AccountNav';
import CartNav from './CartNav';

function Header() {
    return (
        <header>
            <div className="header-left">
                <Link to="/"><span className="header__title">ZAPATINGA</span></Link>
                <NavItem link="/populares">Populares</NavItem>
                <NavItem link="/ofertas">Ofertas</NavItem>
            </div>

            <div className="header-right">
                <CartNav />
                <AccountNav />
            </div>
        </header>
    );
}

export default Header;
