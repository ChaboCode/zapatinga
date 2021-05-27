import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { API_PATH, GET_USERNAME_FROM_JWT } from '../constants.js';

import NavItem from './NavItem';

function AccountNav(props) {
    const [loginStatus, setLoginStatus] = useState({
        message: 'Inicia sesion',
        link: '/login',
    });

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            setLoginStatus({ message: 'Iniciando sesion' });

            axios({
                method: 'get',
                url: API_PATH + GET_USERNAME_FROM_JWT,

                headers: {
                    'Content-Type': 'application/json',
                },

                params: {
                    jwt: jwt,
                },
            })
                .then((result) => {
                    setLoginStatus({
                        message: `Bienvenido, ${result.data}`,
                        link: null,
                    });
                })
                .catch((error) => {
                    localStorage.removeItem('jwt');
                    setLoginStatus({
                        message: `Error, inicie sesion nuevamente`,
                        link: '/login',
                    });
                });
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.reload();
    };

    const jwtExists = localStorage.getItem('jwt') !== undefined;
    return (
        <NavItem link={loginStatus.link} onClick={jwtExists && logout}>
            {loginStatus.message}
        </NavItem>
    );
}

const mapStateToProps = (state) => {
    return {
        logged: state.logged,
    };
};

export default connect(mapStateToProps, null)(AccountNav);
