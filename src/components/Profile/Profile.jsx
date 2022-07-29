import React from 'react';
import Classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={Classes.content}>
            <div><img src='https://images.wallpaperscraft.ru/image/single/gorodskoj_pejzazh_gorod_vid_sverhu_195543_1280x720.jpg' alt='' /></div>
            <div> ava + description</div>
            <div>
                my posts
                <div> new post</div>
                <div className={Classes.item}>
                    <div className={Classes.item}> post 1</div>
                    <div className={Classes.item}> post 2</div>
                </div>
            </div>

        </div>
    )
}

export default Profile;