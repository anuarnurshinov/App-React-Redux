import React from 'react';
import { connect } from 'react-redux/es/exports';
import { moveGalleryRight, moveGalleryLeft, getUsersThunkCreator, onPageChangedThunkCreator, addFollowThunkCreator, deleteFollowThunkCreator } from './../../redux/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize)
    }

    onClickMoveGallery = (orientation) => {
        orientation === 'right' ?
            this.props.moveGalleryRight() :
            this.props.moveGalleryLeft()
    }

    onClickSendFollowToServer = (userId) => {
        this.props.addFollowThunkCreator(userId)
    }

    onClickSendUnfollowToServer = (userId) => {
        this.props.deleteFollowThunkCreator(userId)
    }



    render() {
        return <>
            <Users
                onClickSendUnfollowToServer={this.onClickSendUnfollowToServer}
                onClickSendFollowToServer={this.onClickSendFollowToServer}
                onPageChanged={this.onPageChanged}
                onClickMoveGallery={this.onClickMoveGallery}
                {...this.props}
            />
        </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        galleryPosition: state.usersPage.galleryPosition,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = {
    moveGalleryRight,
    moveGalleryLeft,
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    addFollowThunkCreator,
    deleteFollowThunkCreator,
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
    (UsersContainer)