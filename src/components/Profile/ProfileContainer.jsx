import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { withRouter } from '../Common/WithRouter/WithRouter'
import { getUserProfileThunkCreator } from './../../redux/profileReducer';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfileThunkCreator(this.props.params.id)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            this.props.getUserProfileThunkCreator(this.props.params.id)
        }
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})
let mapDispatchToProps = {
    getUserProfileThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)