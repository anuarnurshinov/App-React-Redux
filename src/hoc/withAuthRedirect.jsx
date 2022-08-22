import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux/es/exports';




export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth,
    })

    let withAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return withAuthRedirect
}