import React from 'react'
import { useForm } from 'react-hook-form';


const MessageForm = (props) => {
    const { register,
        handleSubmit,
        reset
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        props.sendMessage(data.messageText, props.user)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register('messageText')} />
                <button type={'submit'}>Отправить сообщение</button>
            </form>
        </>
    )
}






export default MessageForm;




