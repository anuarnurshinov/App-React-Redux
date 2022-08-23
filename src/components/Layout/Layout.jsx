import React from 'react';
import { Outlet } from 'react-router-dom'
import NavbarContainer from '../Navbar/NavbarContainer';
import HeaderContainer from './../Header/HeaderContainer';


const Layout = (props) => {
    return (
        <div>
            <div className='app-wrapper'>
                <HeaderContainer />
                <NavbarContainer />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;