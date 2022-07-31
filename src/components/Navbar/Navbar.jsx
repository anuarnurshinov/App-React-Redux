import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Navbar.module.css'

const isActive = (navData) => navData.isActive ? Classes.active : ''

const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/profile'>Profile</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/dialogs'>Messages</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/news'>News</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/music'>Music</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/settings'>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar;