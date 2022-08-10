import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator } from './../../redux/dialogsReducer';
import { sendMessageCreator } from './../../redux/dialogsReducer';


const DialogsContainer = (props) => {
    let state = props.store.getState()

    const sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    const updateNewMessageBody = (body) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <Dialogs state={state}
            dialogsPage={state.dialogsPage}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}

        />
    );
};


export default DialogsContainer;



