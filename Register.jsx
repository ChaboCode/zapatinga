import React from 'react';
import './Login.css';

import Header from '../components/Header.jsx';
import LoginForm from '../components/LoginForm';

function Login(props) {
    return (
        <>
            <Header />
            <div class="form-container">
                <LoginForm register={true} {...props}/>
            </div>
        </>
    );
}

export default Login;

