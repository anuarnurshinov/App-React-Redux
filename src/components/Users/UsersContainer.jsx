import React from 'react';
import { connect } from 'react-redux/es/exports';
import { moveGalleryRight, moveGalleryLeft, getUsersThunkCreator, onPageChangedThunkCreator, addFollowThunkCreator, deleteFollowThunkCreator } from './../../redux/users/usersReducer';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getCurrentPage, getGalleryPosition, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users/usersSelectors';




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (event, pageNumber) => {
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        galleryPosition: getGalleryPosition(state),
        isFetching: getIsFetching(state),
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