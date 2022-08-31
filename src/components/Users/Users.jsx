import React from 'react'
import Paginator from './Paginator/Paginator';
import User from './User/User';




const Users = ({ onClickSendUnfollowToServer, onClickSendFollowToServer, totalUsersCount, pageSize, onClickMoveGallery, galleryPosition, currentPage, onPageChanged, isFetching, users }) => {

    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onClickMoveGallery={onClickMoveGallery}
                galleryPosition={galleryPosition}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                isFetching={isFetching} />
            {users.map(user => {
                return <User key={user.id}
                    user={user}
                    onClickSendUnfollowToServer={onClickSendUnfollowToServer}
                    onClickSendFollowToServer={onClickSendFollowToServer} />
            })}
        </div>
    )
}

export default Users