import React from "react";
import loading from '../../../assets/images/loading.svg'

const Preloader = (props) => {
    return (<div>
        <img style={{ width: 50 }} src={loading} alt='' />
    </div>
    )
}

export default Preloader