import React from 'react';
import Classes from './ProfileInfo.module.css'
import Preloader from './../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    const contactObj = props.profile.contacts
    const contactArr = []
    for (const key in contactObj) {
        if (contactObj[key]) {
            contactArr.push({
                name: key,
                link: contactObj[key],
            })
        }
    }
    return (
        <div>
            <div><img className={Classes.contentImg} src='https://images.wallpaperscraft.ru/image/single/gorodskoj_pejzazh_gorod_vid_sverhu_195543_1280x720.jpg' alt='' /></div>
            <div className={Classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='' />
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
                                <a href={`http://${media.link}`} key={media.id}>
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