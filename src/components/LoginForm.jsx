import React, { useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { sha256 } from 'js-sha256';

import './styles/Form.css';

import { API_PATH, VALIDATE_LOGIN, REGISTER } from '../constants';

function LoginForm(props) {
    const { register } = props;

    // State for handling inputs
    const [data, setData] = useState({});

    const handleInput = (inputName, inputValue) => {
        let newData = {};
        newData[inputName] = inputValue;

        setData({
            ...data,
            ...newData,
        });
    };

    const handleSubmit = () => {
        axios({
            method: 'post',
            url: API_PATH + (register ? REGISTER : VALIDATE_LOGIN),

            headers: {
                'Content-Type': 'application/json',
            },

            params: {
                username: data.username,
                password: data.password,
            },
        }).then((result) => {
            console.log(result.data);
            localStorage.setItem('jwt', result.data);
            props.router.push('/');
        });
    };

    return (
        <div class="login-form">
            <h1>{register ? 'Forma parte de Zapatinga!' : 'Bienvenido de nuevo' }</h1>
            <div class="input-group">
                <span>Ingresa tu nombre de usuario</span>
                <input
                    type="text"
                    name="username"
                    onChange={(e) => handleInput('username', e.target.value)}
                />
            </div>

            <div class="input-group">
                <span>Ingresa tu contrase&ntilde;a</span>
                <input
                    type="password"
                    name="password"
                    onChange={(e) =>
                        handleInput('password', sha256(e.target.value))
                    }
                />
            </div>

            <button class="button-send" onClick={handleSubmit}>
                {register ? "Registrarse" : "Ingresar" }
            </button>

            <Link to={register ? "/login" : "/register"}>
                <button class="button-send">
                    {register ? 'Inicia sesion' : 'Registrate'}
                </button>
            </Link>
        </div>
    );
}

export default LoginForm;
