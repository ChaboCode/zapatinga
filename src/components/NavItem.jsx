import React from 'react';
import { Link } from 'react-router';
import './styles/NavItem.css';

function NavItem(props) {
    if (props.link) return (
        <Link className="nav-item__link" to={props.link}>
            <button className="nav-item__button" onClick={props.onClick}>{props.children}</button>
        </Link>
    );
    
    return (
        <div className="nav-item__link">
            <button className="nav-item__button" onClick={props.onClick}>{props.children}</button>
        </div>
    );

}

export default NavItem;
