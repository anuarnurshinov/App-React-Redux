import { useForm } from 'react-hook-form';
import React from 'react'
import { createFieldForForm } from './../../../utils/createField';




const LoginForm = (props) => {
    const { register, handleSubmit, reset, formState: {
        errors, } } = useForm({
            mode: 'onChange'
        })

    const onSubmit = (data) => {
        props.getAuthorizedThunkCreator(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {createFieldForForm(register, 'email', true, 'Поле обязательно', errors, 'Почта')}
            {createFieldForForm(register, 'password', true, 'Поле обязательно', errors, 'Пароль')}
            <label> Запомнить </label>
            <input type="checkbox"{...register('rememberMe')} />
            <input type={'submit'} />

        </form>
    )
}


export default LoginForm