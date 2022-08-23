import { connect } from 'react-redux'
import Navbar from './Navbar';


const mapStateToProps = (state) => {
    return {
        myId: state.auth.userId
    }
}





export default connect(mapStateToProps)(Navbar)