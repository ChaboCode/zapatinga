import React from 'react';
import { Link } from 'react-router';
import './styles/NavItem.css';

function NavItem(props) {
    return (
        <Link className="nav-item__link" to={props.link}>
            <button className="nav-item__button">{props.children}</button>
        </Link>
    );
}

export default NavItem;
