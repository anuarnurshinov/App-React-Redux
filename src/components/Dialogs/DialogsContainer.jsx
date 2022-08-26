import { compose } from 'redux';
import Dialogs from './Dialogs';
import { sendMessageCreator } from './../../redux/dialogs/dialogsReducer';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = {
    sendMessageCreator,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)



