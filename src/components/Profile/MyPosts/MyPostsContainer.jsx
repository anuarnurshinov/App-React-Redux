
import { addPost } from '../../../redux/profile/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';






const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = {
    addPost,
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;