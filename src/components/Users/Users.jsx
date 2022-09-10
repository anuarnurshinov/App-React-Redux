import React from 'react'
import User from './User/User';
import Pagination from '@mui/material/Pagination';
import Classes from './Users.module.css'


const Users = ({ onClickSendUnfollowToServer, onClickSendFollowToServer, totalUsersCount, pageSize, onClickMoveGallery, galleryPosition, currentPage, onPageChanged, isFetching, users }) => {

    return (
        <div className={Classes.wrapper}>
            <Pagination className={Classes.pagination}
                count={totalUsersCount}
                showFirstButton
                showLastButton
                color={'primary'}
                onChange={onPageChanged} />
            {users.map(user => {
                return <div className={Classes.userItem}>
                    <User key={user.id}
                        user={user}
                        onClickSendUnfollowToServer={onClickSendUnfollowToServer}
                        onClickSendFollowToServer={onClickSendFollowToServer} />
                </div>
            })}
        </div>
    )
}

export default Users