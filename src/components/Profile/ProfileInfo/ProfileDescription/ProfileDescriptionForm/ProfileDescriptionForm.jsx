import { useForm } from 'react-hook-form';
import React from 'react'
import { createFieldForForm } from '../../../../../utils/createField';




const ProfileDescriptionForm = (props) => {
    const { register, handleSubmit, reset, formState: {
        errors, } } = useForm({
            mode: 'onChange'
        })

    const onSubmit = (data) => {
        props.submitProfileInformationForm(data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'submit'} />
            <div>
                {createFieldForForm(register, 'fullName', true, 'Поле обязательно', errors, 'Имя')}
            </div>
            <div>
                {createFieldForForm(register, 'aboutMe', true, 'Поле обязательно', errors, 'Обо мне')}
            </div>
            <div>
                Ищу работу: <input type="checkbox"{...register('lookingForAJob')} />
            </div>
            <div>
                {createFieldForForm(register, 'lookingForAJobDescription', true, 'Поле обязательно', errors, 'Ищу работу подробнее')}
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(media => {
                    return (
                        <div key={media}>
                            {createFieldForForm(register, `contacts.${media}`, true, 'Поле обязательно', errors, `${media}`)}

                        </div>
                    )
                })}
            </div>
        </form>
    )
}


export default ProfileDescriptionForm