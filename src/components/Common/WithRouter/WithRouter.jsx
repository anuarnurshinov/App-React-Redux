import React from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const withRouter = (Child) => {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        let params = useParams()

        return <Child {...props} navigate={navigate} location={location} params={params} />;
    }
}