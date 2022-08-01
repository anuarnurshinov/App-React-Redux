import React from 'react'
import Friend from './Friend/Friend'
import Classes from './FriendsList.module.css'

const FriendList = () => {
    return (

        <div>
            <h3>Друзья онлайн</h3>
            <div className={Classes.friendListContainer}>
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div>
    )
}

export default FriendList