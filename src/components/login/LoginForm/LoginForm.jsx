import { Form, Field } from 'react-final-form'
import React from 'react'




const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.getAuthorizedThunkCreator(formData)
    }

    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Логин</label>
                    <Field name="email" component="input" placeholder="Логин" />
                </div>
                <div>
                    <label>Пароль</label>
                    <Field name="password" component="input" placeholder="Пароль" />
                </div><div>
                    <label>Запомнить меня</label>
                    <Field name="rememberMe"
                        component="input"
                        type="checkbox" />
                </div>

                <button type="submit">Submit</button>
            </form>
        )}
    />
}

export default LoginForm