import { connect } from 'react-redux'
import Login from './Login';
import { getAuthorizedThunkCreator } from '../../redux/authReducer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = {
    getAuthorizedThunkCreator,
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)