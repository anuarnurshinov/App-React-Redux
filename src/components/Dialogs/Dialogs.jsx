import React from 'react';
import Dialog from './Dialog/Dialog';
import Classes from './Dialogs.module.css';
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm';
import { useEffect, useState } from 'react';
import { Input } from '@mui/material';




const Dialogs = (props) => {

    let [inputValue, setInputValue] = useState('')
    let [chatId, setChatId] = useState('')

    useEffect(() => {
        props.getAllDialogsThunk()
    }, [chatId])

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const onBlurInput = () => {
        setChatId(inputValue)
        props.startChatThunk(inputValue)
    }




    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return <Dialog
            name={dialog.userName}
            key={dialog.id}
            path={dialog.id}
            getMessagesThunk={props.getMessagesThunk}
        />
    })
    let messagesElements = props.dialogsPage.messages.map(message => {
        return <Message message={message.body} key={message.id} />
    })

    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>

                <Input label="Введите id" variant="filled"
                    onBlur={onBlurInput}
                    onChange={onChangeInput}
                />
                {dialogsElements}



            </div>
            <div className={Classes.messages}>
                {messagesElements}
                <MessageForm user={props.params.id} sendMessage={props.sendMessageThunk} />
            </div>
        </div>
    );
};


export default Dialogs;



