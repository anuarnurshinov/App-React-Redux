import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    return (
        <div>
            <h1> Войдите </h1>
            <LoginForm {...props} />
        </div>
    )
}

export default Login