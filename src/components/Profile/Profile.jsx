import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainter';
import Classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={Classes.profileBlock}>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;