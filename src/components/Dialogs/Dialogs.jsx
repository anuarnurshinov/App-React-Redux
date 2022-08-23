import React from 'react';
import Dialog from './Dialog/Dialog';
import Classes from './Dialogs.module.css';
import Message from './Message/Message'




const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <Dialog name={dialog.name} key={dialog.id} path={dialog.id} />
    })
    let messagesElements = props.dialogsPage.messages.map(message => {
        return <Message message={message.message} key={message.id} />
    })
    let newMessageBody = props.dialogsPage.newMessageBody
    let newMessageElement = React.createRef()

    const onChangeNewMessage = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    let onSendMessageClick = () => {
        props.sendMessage()
    }


    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
                <div>
                    <textarea value={newMessageBody} onChange={onChangeNewMessage} placeholder='Введите сообщение' ref={newMessageElement}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}> Добавить сообщение </button>
                    <button> Удалить сообщение </button>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;



