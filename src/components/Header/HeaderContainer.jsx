import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteAuthorizedThunkCreator } from './../../redux/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

const mapDispatchToProps = {
    deleteAuthorizedThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
