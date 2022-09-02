
import Classes from './AvatarLarge.module.css'
import { useState } from 'react';
import ChangeAvatarBtn from './ChangeAvatarBtn/ChangeAvatarBtn';
import emptyPhoto from '../../../../assets/images/empty.png'
import ChangeDescriptionBtn from './ChangeDescriptionBtn/ChangeDescriptionBtn';


const AvatarLarge = (props) => {
    const [onFocus, setOnFocus] = useState(false)

    const showChangeAvatarBtn = () => {
        setOnFocus(!onFocus)
    }

    return (
        <div className={Classes.avatarBlock}>
            <img style={{ maxWidth: '100%' }} onMouseOver={showChangeAvatarBtn} onMouseOut={showChangeAvatarBtn} src={props.photo ? props.photo : emptyPhoto} alt={''} />
            <div className={Classes.button}>
                <div className={Classes.container}>
                    <ChangeAvatarBtn className={Classes.firstButton}
                        savePhotoThunkCreator={props.savePhotoThunkCreator}
                        ownerId={props.ownerId}
                        params={props.params} />
                    <ChangeDescriptionBtn
                        ownerId={props.ownerId}
                        params={props.params}
                        toggleEditMode={props.toggleEditMode}
                        editMode={props.editMode} />
                </div>
            </div>


        </div>
    )
}

export default AvatarLarge;