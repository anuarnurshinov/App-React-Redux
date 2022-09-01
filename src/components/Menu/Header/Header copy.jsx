import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Header.module.css';
import LogoutBtn from './LogoutBtn/LogoutBtn';

const Header = (props) => {
    return (
        <header className={Classes.header}>
            <img
                className='App-logo'
                src={props.profile.photos.large}
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
