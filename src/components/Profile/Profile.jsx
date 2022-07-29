import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={Classes.content}>
            <div><img className={Classes.contentImg} src='https://images.wallpaperscraft.ru/image/single/gorodskoj_pejzazh_gorod_vid_sverhu_195543_1280x720.jpg' alt='' /></div>
            <div> ava + description</div>
            <MyPosts />
        </div>
    )
}

export default Profile;