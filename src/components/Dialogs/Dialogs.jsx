import React from 'react';
import Dialog from './Dialog/Dialog';
import Classes from './Dialogs.module.css';
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm';




const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <Dialog name={dialog.name} key={dialog.id} path={dialog.id} />
    })
    let messagesElements = props.dialogsPage.messages.map(message => {
        return <Message message={message.message} key={message.id} />
    })

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
                <MessageForm sendMessage={props.sendMessageCreator} />
            </div>
        </div>
    );
};


export default Dialogs;



