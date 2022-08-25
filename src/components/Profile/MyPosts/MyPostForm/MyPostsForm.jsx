import React from 'react'
import { useForm } from 'react-hook-form';


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
                <input {...register('postMessage', {
                    required: true,
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                    }
                })} />
                <input disabled={!isValid} type='submit'></input>
            </form>
            <div style={{ height: 40 }}> {errors?.postMessage && <p>{errors?.postMessage?.message || 'Error!'}</p>} </div>
        </div>
    )
}


export default MyPostsForm;

