import Classes from './ProfileDescription.module.css'
import CheckIcon from '@mui/icons-material/Check';
import FacebookIcon from '@mui/icons-material/Facebook';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIcon } from '@mui/material';
import { ReactComponent as VkIcon } from '../../../../assets/images/icons/vk.svg';
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
            <div className={Classes.userCard}>
                <div className={Classes.name}>
                    Имя:
                </div>
                <div className={Classes.nameValue}>
                    {props.profile.fullName}
                </div>
                <div className={Classes.aboutMe}>
                    Обо мне:
                </div>
                <div className={Classes.aboutMeValue}>
                    {props.profile.aboutMe}
                </div>
                <div className={Classes.work}> Подробнее о работе:</div>
                <div className={Classes.workValue}>
                    <div>{props.profile.lookingForAJob ? <span>В поиске <CheckIcon /></span> : 'Не ищу работу'}</div>

                    <div> {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : ''}</div>
                </div>
            </div>
            <div className={Classes.mediaBlock}>
                {forMapArrayCreator().map(media => {
                    return (
                        <span key={media}>
                            <a href={`https://${media[0]}.com`}>
                                {<IconHOK type={`${media[0]}`} fontSize="large" width='auto' />}
                            </a>
                        </span>
                    )
                })}



            </div>
        </>
    )
}

export default ProfileDescription


const IconHOK = (component) => {
    switch (component.type) {
        case "facebook":
            return (<FacebookIcon />);
        case "website":
            return (<CoPresentIcon />);
        case "twitter":
            return (<TwitterIcon />);
        case "instagram":
            return (<InstagramIcon />);
        case "youtube":
            return (<YouTubeIcon />);
        case "github":
            return (<GitHubIcon />);
        case "mainLink":
            return (<InsertLinkIcon />);
        case "vk":
            return (<SvgIcon component={VkIcon} style={{ fontSize: 16, marginRight: 13, marginLeft: 4, marginTop: -15 }} overflow='visible' href={component.href} />);
        default:
            break;
    }

}



