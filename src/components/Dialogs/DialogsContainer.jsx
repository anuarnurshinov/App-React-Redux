import { compose } from 'redux';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator, sendMessageCreator } from './../../redux/dialogsReducer';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) },
        sendMessage: () => { dispatch(sendMessageCreator()) },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)



