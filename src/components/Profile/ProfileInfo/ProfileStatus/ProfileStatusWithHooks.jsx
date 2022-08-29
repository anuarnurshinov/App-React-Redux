import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.sendNewStatusThunkCreator(status)
    }
    const changeStatus = (e) => {
        setStatus(e.target.value)
    }




    return (
        <>
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={() => { activateEditMode() }}>
                            Мой статус: {props.status}
                        </span>
                    </div>}
            </div>
            <div>
                {editMode &&
                    <input onChange={changeStatus} onBlur={() => { deactivateEditMode() }} autoFocus={true} value={status} />}
            </div>
        </>
    );
}

export default ProfileStatusWithHooks;