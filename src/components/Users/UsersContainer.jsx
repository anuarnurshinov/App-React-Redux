import { connect } from 'react-redux/es/exports';
import Users from './Users';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from './../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unfollow: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUserAC(users)) },
        setCurrentPage: (page) => { dispatch(setCurrentPageAC(page)) },
        setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer