import React from 'react';
import Classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img className={Classes.contentImg} src='https://images.wallpaperscraft.ru/image/single/gorodskoj_pejzazh_gorod_vid_sverhu_195543_1280x720.jpg' alt='' /></div>
            <div className={Classes.descriptionBlock}> ava + description</div>
        </div>
    )
}

export default ProfileInfo;