import React from 'react';
import Classes from './ProfileInfo.module.css'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    const contactObj = props.profile.contacts
    const contactArr = []
    let id = 0
    for (const key in contactObj) {
        if (contactObj[key]) {
            id++
            contactArr.push({
                name: key,
                link: contactObj[key],
                id,
            })
        }
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunkCreator(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={Classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
                {props.ownerId === +props.params.id ?
                    <input type={"file"} onChange={mainPhotoSelected} /> : null}
                <ProfileStatusWithHooks {...props} />
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJob}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    {contactArr.map(media => {
                        return (
                            <div key={media.id}>
                                <a href={`http://${media.link}`}>
                                    {media.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;