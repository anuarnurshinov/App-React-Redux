import React from 'react';
import Dialog from './Dialog/Dialog';
import Classes from './Dialogs.module.css';
import { useEffect, useState } from 'react';
import { Input } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Messages from './Messages/Messages';




const Dialogs = (props) => {
    return (
        <div className={Classes.wrapper}>
            <Routes>
                <Route path='/' element={<DialogList {...props}
                />} />
                <Route path=':id' element={<Messages
                    getAllDialogsThunk={props.getAllDialogsThunk}
                    ownerId={props.ownerId}
                    ownerPhoto={props.ownerPhoto}
                    dialogsPage={props.dialogsPage}
                    getMessagesThunk={props.getMessagesThunk}
                    sendMessageThunk={props.sendMessageThunk} />} />
            </Routes>
        </div>
    );
};


export default Dialogs;

const DialogList = (props) => {
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
        return ((<Dialog
            key={dialog.id}
            dialog={dialog}
            getMessagesThunk={props.getMessagesThunk}
        />))
    })
    return (
        <div className={Classes.dialogs}>
            <div className={Classes.dialogItems}>
                <Input placeholder={"Введите id пользователя"} label="Введите id" color={'primary'} variant="filled"
                    onBlur={onBlurInput}
                    onChange={onChangeInput} />
                {dialogsElements}
            </div>
        </div>
    )
}