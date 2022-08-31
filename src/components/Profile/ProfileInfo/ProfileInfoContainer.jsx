
import React from 'react';
import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import ProfileInfo from './ProfileInfo';
import { updateProfileInfoThunkCreator } from './../../../redux/profile/profileReducer';



class ProfileInfoContainer extends React.Component {
    render() {
        return (
            <ProfileInfo {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
})
let mapDispatchToProps = {
    updateProfileInfoThunkCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileInfoContainer)


