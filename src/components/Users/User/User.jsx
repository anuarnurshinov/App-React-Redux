import Classes from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

const User = ({ user, onClickSendUnfollowToServer, onClickSendFollowToServer }) => {
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
                        onClick={() => { onClickSendUnfollowToServer(user.id) }}> Unfollow </button> :
                    <button
                        onClick={() => { onClickSendFollowToServer(user.id) }}> Follow </button>}
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

}

export default User;