import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Classes from './Profile.module.css'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={Classes.container}>
            <div class={Classes.ProfileInfo}><ProfileInfoContainer {...props} /></div>
            <div class={Classes.posts}><MyPostsContainer /></div>
        </div>

    )
}

export default Profile;