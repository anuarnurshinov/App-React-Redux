import React from 'react'
import Classes from './LoginBtn.module.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';





const LoginBtn = (props) => {
    return (
        <div className={Classes.loginBlock}>
            <Button variant="contained">
                <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
                    Войти
                </Link>
            </Button>
        </div>
    );
}

export default LoginBtn;