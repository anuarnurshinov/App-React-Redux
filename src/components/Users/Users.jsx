import * as axios from "axios";
import React from "react";
import Classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pagesArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        return (
            <div>
                <div>
                    {pagesArray.map(page => {
                        return (
                            <span
                                key={page}
                                className={this.props.currentPage === page ? Classes.selectedPage : '' + Classes.page}
                                onClick={() => { this.onPageChanged(page) }}>
                                {page}
                            </span>
                        )
                    })}
                </div>
                {this.props.users.map(user => {
                    return <div key={user.id} >
                        <span >
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' className={Classes.avatar} />
                            </div>
                        </span>
                        <span >
                            <div>
                                {user.followed ?
                                    <button onClick={() => { this.props.unfollow(user.id) }}> Unfollow </button> :
                                    <button onClick={() => { this.props.follow(user.id) }}> Follow </button>}
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
                                    {"user.location.city"}
                                </div>
                                <div>
                                    {"user.location.country"}
                                </div>
                            </span>
                        </span>

                    </div>
                })}
            </div>
        )
    }
}

export default Users