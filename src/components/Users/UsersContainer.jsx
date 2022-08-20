import React from 'react';
import { connect } from 'react-redux/es/exports';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, moveGalleryRight, moveGalleryLeft, toggleIsFetching } from './../../redux/usersReducer';
import Users from "./Users";
import { usersAPI } from './../../api/api';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
    }
    onClickGalleryRight = () => {
        this.props.moveGalleryRight()
    }
    onClickGalleryLeft = () => {
        this.props.moveGalleryLeft()
    }
    onClickSendFollowToServer = (userId) => {
        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userId)
                }
            });
    }
    onClickSendUnfollowToServer = (userId) => {
        usersAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userId)
                }
            });
    }


    render() {
        return <>
            <Users
                onClickSendUnfollowToServer={this.onClickSendUnfollowToServer}
                onClickSendFollowToServer={this.onClickSendFollowToServer}
                onClickGalleryLeft={this.onClickGalleryLeft}
                onPageChanged={this.onPageChanged}
                onClickGalleryRight={this.onClickGalleryRight}
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
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    moveGalleryRight,
    moveGalleryLeft,
    toggleIsFetching
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
