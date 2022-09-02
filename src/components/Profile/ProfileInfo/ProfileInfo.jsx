import React, { useState } from 'react';
import Classes from './ProfileInfo.module.css'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileDescriptionForm from './ProfileDescription/ProfileDescriptionForm/ProfileDescriptionForm';
import AvatarLarge from './AvatarLarge/AvatarLarge';

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
                <div className={Classes.block}>
                    <AvatarLarge photo={props.profile.photos.large}
                        savePhotoThunkCreator={props.savePhotoThunkCreator}
                        ownerId={props.ownerId}
                        params={props.params}
                        toggleEditMode={toggleEditMode}
                        editMode={editMode}
                    />
                    <ProfileStatus
                        status={props.status}
                        sendNewStatusThunkCreator={props.sendNewStatusThunkCreator} />
                </div>

                <div className={Classes.block}>
                    {!editMode ?
                        <ProfileDescription
                            toggleEditMode={toggleEditMode}
                            profile={props.profile} />
                        : <ProfileDescriptionForm
                            profile={props.profile}
                            submitProfileInformationForm={submitProfileInformationForm}
                        />}
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;


