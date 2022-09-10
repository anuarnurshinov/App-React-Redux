import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


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
                <TextField sx={{ width: '80%' }} id="outlined-basic" label="Отправить сообщение" variant="outlined" {...register('messageText')} />
                <Button sx={{ m: '1em' }} type={'submit'} variant={'contained'}><SendIcon /></Button>
            </form>
        </>
    )
}






export default MessageForm;




