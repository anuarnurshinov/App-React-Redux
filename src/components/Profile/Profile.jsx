import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import Classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={Classes.profileBlock}>
            <ProfileInfo />
            <MyPosts state={props.profilePage.posts}
                dispatch={props.dispatch}
                updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;