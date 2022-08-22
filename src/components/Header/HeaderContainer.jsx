import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from '../../redux/authReducer'
import { usersAPI } from './../../api/api';
class HeaderContainer extends React.Component {
    componentDidMount() {

        usersAPI.getAuthData()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            });
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
})

const mapDispatchToProps = {
    setAuthUserData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
