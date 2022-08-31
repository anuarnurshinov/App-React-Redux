const ChangeAvatarBtn = (props) => {
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunkCreator(e.target.files[0])
        }
    }
    if (props.ownerId === +props.params.id) {
        return (
            <div>
                <input type={"file"} onChange={mainPhotoSelected} />
            </div>
        )
    }

}

export default ChangeAvatarBtn