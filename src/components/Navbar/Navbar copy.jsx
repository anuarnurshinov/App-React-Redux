import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import FriendList from './FriendsList/FriendsList';
import Classes from './Navbar.module.css'

const isActive = (navData) => navData.isActive ? Classes.active : ''
const Navbar = (props) => {
    return (
        <nav className={Classes.nav}>
            <div className={Classes.item}>
                <NavLink className={isActive} to={`/profile`}>Profile</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/dialogs'>Messages</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/news'>News</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/music'>Music</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/settings'>Settings</NavLink></div>
            <div className={Classes.item}>
                <NavLink className={isActive} to='/users'>Users</NavLink></div>


            <Routes>
                <Route path='dialogs/*' element={<FriendList />}>
                </Route>
            </Routes>


        </nav>
    )
}

export default Navbar;