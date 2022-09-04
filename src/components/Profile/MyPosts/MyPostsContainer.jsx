import React from 'react';
import { addPost } from '../../../redux/profile/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';



class MyPostsContainer extends React.Component {
    render() {
        return (
            <MyPosts {...this.props} />
        )
    }
}



const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = {
    addPost,
}





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(MyPostsContainer)