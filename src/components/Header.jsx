import React from 'react';
import { Link } from 'react-router';
import './styles/Header.css';

import NavItem from './NavItem';
import AccountNav from './AccountNav';
import CartNav from './CartNav';

function Header() {
    return (
        <>
            <header>
                <div className="header-left">
                    <Link to="/">
                        <span className="header__title">ZAPATINGA</span>
                    </Link>
                </div>

                <div className="header-right">
                    <CartNav />
                    <AccountNav />
                </div>
            </header>
            <nav class="navbar">
                <Link class="navitem" to="/primaverano"><span>Primaverano 2021</span></Link>
                <Link class="navitem" to="/otono"><span>Invernal 2021</span></Link>
                <Link class="navitem" to="/invernal"><span>Oto&ntilde;o 2021</span></Link>
            </nav>
        </>
    );
}

export default Header;
