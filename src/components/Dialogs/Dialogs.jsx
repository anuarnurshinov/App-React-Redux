import React from "react";
import Dialog from "./Dialog/Dialog";
import Classes from "./Dialogs.module.css";
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData = [
        {
            id: '1',
            name: 'Dima'
        },
        {
            id: '2',
            name: 'Anuar'
        },
        {
            id: '3',
            name: 'Vasya'
        },
        {
            id: '4',
            name: 'Anya'
        },
    ]
    let messagesData = [
        {
            id: '1',
            message: 'Hello'
        },
        {
            id: '2',
            message: 'GoodBy'
        },
        {
            id: '3',
            message: "What's up?"
        },
        {
            id: '4',
            message: 'Where are u?'
        },
    ]
    let messagesElements = messagesData.map(message => {
        return <Message message={message.message} />
    })
    let dialogsElements = dialogsData.map(dialog => {
        return <Dialog name={dialog.name} path={dialog.id} />
    })

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};


export default Dialogs;
