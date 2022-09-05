import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from '../Dialogs.module.css';

const Dialog = (props) => {
    const getMessagesList = () => {
        props.getMessagesThunk(props.path)
    }

    return (
        <div className={Classes.dialog}>
            <NavLink
                onClick={getMessagesList}
                className={(navData) => navData.isActive ? Classes.active : Classes.dialogItem} to={'/dialogs/' + props.path}> {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;
