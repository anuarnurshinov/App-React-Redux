import React from 'react';
import { Outlet } from 'react-router-dom'
import MenuContainer from '../Menu/MenuContainer';
import Classes from './Layout.module.css'


const Layout = (props) => {
    return (
        <div>
            <div className='app-wrapper'>
                <MenuContainer />
                <div className={Classes.contentWrapper}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;