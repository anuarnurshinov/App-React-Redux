import React from 'react'
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Classes from './MyPostsForm.module.css'


const MyPostsForm = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (data) => {
        props.addPost(data.postMessage)
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Classes.textField}><TextField {...register('postMessage', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                })}
                    id="outlined-textarea"
                    label="Опубликовать пост"
                    multiline
                />
                    <span className={Classes.sendButton}>
                        <Button style={{ marginTop: 10, marginLeft: 5 }} type='submit' variant="contained" endIcon={<SendIcon />}>
                            Отправить
                        </Button>
                    </span>
                </div>



            </form>
            <div style={{ height: 40 }}> {errors?.postMessage && <p>{errors?.postMessage?.message || 'Error!'}</p>} </div>
        </div>
    )
}


export default React.memo(MyPostsForm);

