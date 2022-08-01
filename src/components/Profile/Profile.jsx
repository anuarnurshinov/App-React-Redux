import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={Classes.profileBlock}>
            <ProfileInfo />
            <MyPosts state={props.state.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;