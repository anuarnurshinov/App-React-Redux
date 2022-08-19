import React from 'react';
import * as axios from "axios";
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from '../Common/WithRouter/WithRouter'


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.id}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.id}`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
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
    setUserProfile,
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent);