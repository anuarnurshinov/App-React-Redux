
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Classes from './Messages.module.css'


const Messages = (props) => {
    let params = useParams()

    const getPhoto = (userId) => {
        if (userId === props.ownerId) {
            return props.ownerPhoto
        }
        else {
            let photo
            props.dialogsPage.dialogs.forEach(element => {
                if (element.id === userId) {
                    photo = element.photos.small
                }
            })
            console.log(photo);
            return photo
        }
    }



    useEffect(() => {
        props.getMessagesThunk(params.id)
        props.getAllDialogsThunk()
    }, [params.id])

    let messagesElements = props.dialogsPage.messages.map(message => {
        return (<div
            key={message.id}>
            <Message
                photo={getPhoto(message.senderId)}
                key={message.id}
                message={message.body}
                login={message.senderName} />
        </div>)
    })





    return (


        <div className={Classes.messageContainer}>
            <div className={Classes.messages}> {messagesElements} </div>
            <MessageForm user={params.id} sendMessage={props.sendMessageThunk} />
        </div>
    )
}

export default Messages;