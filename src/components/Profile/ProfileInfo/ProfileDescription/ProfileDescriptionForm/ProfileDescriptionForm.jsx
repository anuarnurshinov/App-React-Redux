import { useForm } from 'react-hook-form';
import React from 'react'
import { createFieldForForm } from '../../../../../utils/createField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';




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
            <div>
                {createFieldForForm(register, 'fullName', false, 'Поле обязательно', errors, 'Имя')}
            </div>
            <div>
                {createFieldForForm(register, 'aboutMe', false, 'Поле обязательно', errors, 'Обо мне')}
            </div>
            <div>
                Ищу работу: <input type="checkbox"{...register('lookingForAJob')} />
            </div>
            <div>
                {createFieldForForm(register, 'lookingForAJobDescription', false, 'Поле обязательно', errors, 'Ищу работу подробнее')}
            </div>
            <div>
                {Object.keys(props.profile.contacts).map(media => {
                    return (
                        <div key={media}>
                            {createFieldForForm(register, `contacts.${media}`, false, 'Поле обязательно', errors, `${media}`)}
                        </div>
                    )
                })}
            </div>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button type={'submit'} style={{ margin: 5 }} variant="contained" component="button">
                    Изменить
                    <TextSnippetIcon />
                </Button>
            </Stack>
        </form>
    )
}


export default ProfileDescriptionForm