import React from "react";
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import HeaderContainer from './../Header/HeaderContainer';


const Layout = (props) => {
    return (
        <div>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;