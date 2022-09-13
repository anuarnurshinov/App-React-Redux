import { connect } from 'react-redux'
import Login from './Login';
import { getAuthorizedThunkCreator } from '../../redux/auth/authReducer.ts';
import { compose } from 'redux';
import { successfulLoginRedirect } from '../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = {
    getAuthorizedThunkCreator,
}



export default compose(
    successfulLoginRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Login)

