import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Classes from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={Classes.container}>
            <div className={Classes.ProfileInfo}><ProfileInfoContainer {...props} /></div>
            <div className={Classes.posts}><MyPostsContainer profile={props.profile} /></div>
        </div>

    )
}

export default Profile;