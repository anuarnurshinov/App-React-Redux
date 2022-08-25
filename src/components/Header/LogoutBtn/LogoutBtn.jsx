import React from 'react'
import Classes from './LogoutBtn.module.css';





const LogoutBtn = (props) => {
    const logout = () => {
        props.logoutFnc()
    }
    return (
        <div className={Classes.loginBlock}>
            {props.isAuth ? <button onClick={logout}> Выйти </button> : ''}
        </div>
    );
}

export default LogoutBtn;