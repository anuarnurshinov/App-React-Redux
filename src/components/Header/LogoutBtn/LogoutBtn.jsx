import React from 'react'
import Classes from './LogoutBtn.module.css';
import Button from '@mui/material/Button';




const LogoutBtn = (props) => {
    const logout = () => {
        props.logoutFnc()
    }
    return (
        <div className={Classes.loginBlock}>
            {props.isAuth ? <Button variant="contained" onClick={logout}> Выйти </Button> : ''}
        </div>
    );
}

export default LogoutBtn;