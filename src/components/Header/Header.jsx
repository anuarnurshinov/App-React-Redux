import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Header.module.css';
import LogoutBtn from './LogoutBtn/LogoutBtn';

const Header = (props) => {
    return (
        <header className={Classes.header}>
            <img
                className='App-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'
                alt='' />
            <LogoutBtn
                isAuth={props.isAuth}
                logoutFnc={props.deleteAuthorizedThunkCreator} />
            <div className={Classes.loginBlock}>
                {props.isAuth ? props.login : <Link to='/login'>
                    Login
                </Link>}
            </div>
        </header>
    );
};

export default Header;
