import React from 'react';
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

export const successfulLoginRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) {
                return <Navigate to={`/profile/${this.props.userId}`} />
            }
            return <Component {...this.props} />
        }
    }

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    })

    let withAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return withAuthRedirect
}
