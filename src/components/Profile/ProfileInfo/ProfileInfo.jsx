import React, { useState } from 'react';
import Classes from './ProfileInfo.module.css'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ChangeAvatarBtn from './ChangeAvatarBtn/ChangeAvatarBtn';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileDescriptionForm from './ProfileDescription/ProfileDescriptionForm/ProfileDescriptionForm';
const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }
    const submitProfileInformationForm = (data) => {
        props.updateProfileInfoThunkCreator(data)
        setEditMode(!editMode)
    }
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={Classes.descriptionBlock}>

                <img
                    src={props.profile.photos.large}
                    alt='' />

                <ChangeAvatarBtn
                    savePhotoThunkCreator={props.savePhotoThunkCreator}
                    ownerId={props.ownerId}
                    params={props.params} />

                <ProfileStatusWithHooks
                    status={props.status}
                    sendNewStatusThunkCreator={props.sendNewStatusThunkCreator} />


                {!editMode ?
                    <ProfileDescription
                        toggleEditMode={toggleEditMode}
                        profile={props.profile} />
                    : <ProfileDescriptionForm profile={props.profile}
                        submitProfileInformationForm={submitProfileInformationForm}
                    />}
            </div>
        </div>
    )
}


export default ProfileInfo;


