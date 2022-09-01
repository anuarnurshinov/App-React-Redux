import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteAuthorizedThunkCreator } from '../../../redux/auth/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
})

const mapDispatchToProps = {
    deleteAuthorizedThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
