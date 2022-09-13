import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteAuthorizedThunkCreator } from '../../../redux/auth/authReducer.ts';
import { getSmallPhotoThunkCreator } from './../../../redux/menu/menuReducer';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        this.props.getSmallPhotoThunkCreator(this.props.userId)
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.props.getSmallPhotoThunkCreator(this.props.userId)
        }
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
    smallUserPhoto: state.auth.smallUserPhoto,
})

const mapDispatchToProps = {
    deleteAuthorizedThunkCreator,
    getSmallPhotoThunkCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
