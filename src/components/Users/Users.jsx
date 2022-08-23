import React from 'react'
import Classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import Preloader from '../Common/Preloader/Preloader'
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    return (
        <div>
            <div className={Classes.pageListBlock}>
                <button onClick={() => { props.onClickMoveGallery('left') }}> Назад </button>
                <div className={Classes.galleryContainer}>
                    <div className={Classes.gallery} style={{ marginLeft: props.galleryPosition }}>
                        {pagesArray.map(page => {
                            return (
                                <span key={page}
                                    className={props.currentPage === page ? Classes.selectedPage : '' + Classes.currentPage}
                                    onClick={() => { props.onPageChanged(page) }}>
                                    {page}</span>)
                        })}
                    </div>
                </div>
                <button onClick={() => { props.onClickMoveGallery('right') }}> Вперед </button>
                {props.isFetching ? <Preloader /> : null}

            </div>
            {props.users.map(user => {
                return <div key={user.id} >
                    <span >
                        <div>
                            <NavLink to={'/profile/' + `${user.id}`} >
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={Classes.avatar} />
                            </NavLink>
                        </div>
                    </span>
                    <span >
                        <div>
                            {user.followed ?
                                <button
                                    onClick={() => { props.onClickSendUnfollowToServer(user.id) }}> Unfollow </button> :
                                <button
                                    onClick={() => { props.onClickSendFollowToServer(user.id) }}> Follow </button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                            <div>
                                {user.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {'user.location.city'}
                            </div>
                            <div>
                                {'user.location.country'}
                            </div>
                        </span>
                    </span>

                </div>
            })}
        </div>
    )
}

export default Users