import React from "react";
import Dialog from "./Dialog/Dialog";
import Classes from "./Dialogs.module.css";
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => {
        return <Dialog name={dialog.name} path={dialog.id} />
    })
    let messagesElements = props.state.messages.map(message => {
        return <Message message={message.message} />
    })
    let newMessageElement = React.createRef()

    let addNewMessage = () => {
        let text = newMessageElement.current.value
        console.log(text);
    }


    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={Classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}>

                    </textarea>
                </div>
                <div>
                    <button onClick={addNewMessage}> Добавить сообщение </button>
                    <button> Удалить сообщение </button>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;
