import Classes from './Layout.module.css'
import React from 'react';
import { Outlet } from 'react-router-dom'
import NavbarContainer from '../Navbar/NavbarContainer';
import HeaderContainer from './../Header/HeaderContainer';


const Layout = (props) => {
    return (
        <div>
            <div>
                <HeaderContainer />
                <NavbarContainer />
                <Outlet className={Classes.content} />
            </div>
        </div>
    )
}

export default Layout;