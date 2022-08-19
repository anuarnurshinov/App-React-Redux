import React from 'react';
import { connect } from 'react-redux/es/exports';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, moveGalleryRight, moveGalleryLeft, toggleIsFetching } from './../../redux/usersReducer';
import * as axios from "axios";
import Users from "./Users";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            });
    }
    onClickGalleryRight = () => {
        this.props.moveGalleryRight()
    }
    onClickGalleryLeft = () => {
        this.props.moveGalleryLeft()
    }


    render() {
        return <>
            <Users
                isFetching={this.props.isFetching}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onClickGalleryLeft={this.onClickGalleryLeft}
                galleryPosition={this.props.galleryPosition}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onClickGalleryRight={this.onClickGalleryRight}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
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
