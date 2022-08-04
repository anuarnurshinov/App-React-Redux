import React from "react";
import Dialog from "./Dialog/Dialog";
import Classes from "./Dialogs.module.css";
import Message from './Message/Message'
import { sendMessageCreator } from './../../redux/store';
import { updateNewMessageBodyCreator } from "../../redux/store";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => {
        return <Dialog name={dialog.name} path={dialog.id} />
    })
    let messagesElements = props.state.messages.map(message => {
        return <Message message={message.message} />
    })
    let newMessageBody = props.state.newMessageBody
    let newMessageElement = React.createRef()

    const onChangeNewMessage = (e) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }


    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
                <div>
                    <textarea value={newMessageBody} onChange={onChangeNewMessage} placeholder="Введите сообщение" ref={newMessageElement}>
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
