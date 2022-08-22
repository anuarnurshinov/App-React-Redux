import React from "react";

const FollowButtons = (props) => {
    return (
        props.isFollowed ?
            <button
                key={props.userId}
                disabled={props.followingInProgress.some((el) => el === props.userId)}
                onClick={() => { props.onClickSendUnfollowToServer(props.userId) }}> Unfollow
            </button>
            :
            <button
                key={props.userId}
                disabled={props.followingInProgress.some((el) => el === props.userId)}
                onClick={() => { props.onClickSendFollowToServer(props.userId) }}> Follow
            </button>
    )




}

export default FollowButtons