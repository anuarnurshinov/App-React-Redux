import { compose } from 'redux';
import Dialogs from './Dialogs';
import { sendMessageThunk, getAllDialogsThunk, startChatThunk, getMessagesThunk } from './../../redux/dialogs/dialogsReducer';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { withRouter } from '../Common/WithRouter/WithRouter'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = {
    sendMessageThunk,
    getAllDialogsThunk,
    startChatThunk,
    getMessagesThunk,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(Dialogs)



