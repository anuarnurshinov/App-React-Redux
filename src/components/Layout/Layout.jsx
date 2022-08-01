import React from "react";
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';


const Layout = (props) => {
    return (
        <div>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;