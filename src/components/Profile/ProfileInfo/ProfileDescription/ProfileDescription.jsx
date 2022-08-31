const ProfileDescription = (props) => {

    let forMapArrayCreator = () => {
        let array = []
        for (const key in props.profile.contacts) {
            if (Object.hasOwnProperty.call(props.profile.contacts, key)) {
                array.push([
                    key,
                    props.profile.contacts[key]
                ])
            }
        }
        return array
    }

    return (
        <>
            <button onClick={props.toggleEditMode}>Редактировать профиль</button>
            <div>
                Имя: {props.profile.fullName}
            </div>
            <div>
                Обо мне: {props.profile.aboutMe}
            </div>
            <div>
                {props.profile.lookingForAJob ? ' В поиске работы' : 'Не ищу работу'}
            </div>
            <div>
                Подробнее о работе: {props.profile.lookingForAJobDescription}
            </div>
            <div>
                {forMapArrayCreator().map(media => {
                    return (
                        <div key={media}>
                            <a href={`https://${media[0]}`}>
                                {media[0]}
                            </a>
                        </div>
                    )
                })}



            </div>
        </>
    )
}

export default ProfileDescription