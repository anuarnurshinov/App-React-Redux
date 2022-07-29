import React from 'react';
import Classes from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={Classes.nav}>
            <div className={`${Classes.item} ${Classes.active}`}><a>Profile</a></div>
            <div className={Classes.item}><a>Messages</a></div>
            <div className={Classes.item}><a>News</a></div>
            <div className={Classes.item}><a>Music</a></div>
            <div className={Classes.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;