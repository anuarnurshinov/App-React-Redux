import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    return (
        <div>
            <h1> Войдите </h1>
            <LoginForm {...props} />

            <span>Email: free@samuraijs.com

                Password: free</span>
        </div>
    )
}

export default Login