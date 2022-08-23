import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.sendNewStatusThunkCreator(this.state.status)
    }
    changeStatus = (e) => {
        let status = e.target.value
        this.setState({
            status,
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={() => { this.activateEditMode() }}>
                                Мой статус: {this.props.status}
                            </span>
                        </div>}
                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus={true} onBlur={() => { this.deactivateEditMode() }} onChange={this.changeStatus} value={this.state.status} />}
                </div>
            </>
        );
    }
}

export default ProfileStatus;