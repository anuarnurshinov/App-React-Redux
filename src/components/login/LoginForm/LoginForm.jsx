import { useForm } from 'react-hook-form';
import React from 'react'




const LoginForm = (props) => {

    const { register, handleSubmit, reset, formState: {
        errors,
    } } = useForm({
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        props.getAuthorizedThunkCreator(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', {
                required: {
                    value: true,
                    message: 'Поле обязательно'
                }
            })} placeholder={errors.email ? errors.email.message : 'Почта'} />
            <input {...register('password', {
                required: {
                    value: true,
                    message: 'Поле обязательно'
                }
            })} placeholder={errors.password ? errors.password.message : 'Пароль'} />
            <label> Запомнить </label>
            <input type="checkbox"{...register('rememberMe')} />
            <input type={'submit'} />

        </form>
    )
}


export default LoginForm