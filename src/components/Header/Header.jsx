import React from 'react';
import Classes from './Header.module.css'

const Header = () => {
    return (
        <header className={Classes.header}>
            <img className='App-logo' src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='' />
        </header>
    )
}

export default Header;