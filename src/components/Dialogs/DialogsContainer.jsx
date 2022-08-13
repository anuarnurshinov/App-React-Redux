import React from "react";
import Dialogs from "./Dialogs";
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogsReducer';
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) },
        sendMessage: () => { dispatch(sendMessageCreator()) },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;



