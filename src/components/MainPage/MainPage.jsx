import React from 'react'
import Classes from './MainPage.module.css'
const MainPage = () => {
    return (<div className={Classes.block}>

        <h1 className={Classes.h1}>Презентационный проект Нуршинова Ануара</h1>
        <h1 className={Classes.h1}>Социальная сеть</h1>
        <h2>Используемые технологии:</h2>
        <ul>
            <li className={Classes.h2}>
                <h2>React</h2>
            </li>
            <li className={Classes.h2}>
                <h2>Redux</h2>
            </li>
            <li className={Classes.h2}>
                <h2>React-Redux</h2>
            </li>
            <li className={Classes.h2}>
                <h2>Material UI</h2>
            </li>
            <li className={Classes.h2}>
                <h2>Axios</h2>
            </li>
            <li className={Classes.h2}>
                <h2>Bootstrap</h2>
            </li>
            <li className={Classes.h2}>
                <h2>Reselect</h2>
            </li>
            <li className={Classes.h2}>
                <h2>React Routur DOM</h2>
            </li>
            <li className={Classes.h2}>
                <h2>React Hook Form</h2>
            </li>
            <li className={Classes.h2}>
                <h2>NPM</h2>
            </li>
            <li className={Classes.h2}>
                <h2>WebPack</h2>
            </li>
        </ul></div>);
}

export default MainPage;