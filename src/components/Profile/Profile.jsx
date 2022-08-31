import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Classes from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={Classes.profileBlock}>
            <ProfileInfoContainer {...props} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;