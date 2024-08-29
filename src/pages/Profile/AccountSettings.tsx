import profile_custom_user from "../../styles/ProfilePages/AccountSettings.module.scss"
import { SelectionButton } from "../../components/SelectionButton/SelectionButton"

const buttonsContent = [
    {
        "title": "Personal info",
        "subtitle" : "It is a long established fact that a reader will be distracted by the readable content",
        "favicon" : "fa fa-regular fa-address-card"
    },
    {
        "title": "Services you offer",
        "subtitle" : "It is a long established fact that a reader will be distracted by the readable content",
        "favicon" : "fa fa-light fa-briefcase"
    },
    {
        "title": "Payments",
        "subtitle" : "It is a long established fact that a reader will be distracted by the readable content",
        "favicon" : "fa fa-solid fa-money-bill"
    },
    {
        "title": "Availability calendar",
        "subtitle" : "It is a long established fact that a reader will be distracted by the readable content",
        "favicon" : "fa fa-regular fa-calendar"
    },
]

export function AccountSettings(){
    return(
        <div className={profile_custom_user.profile_custom_user}>
            <div>
                <div className={profile_custom_user.info}>
                    <h1>Account settings</h1>
                    <h3>Personalize your profile by adding detailed information below</h3>
                </div> 
                <div className={profile_custom_user.buttonsContent}>
                    {buttonsContent.map((button) => (
                        <SelectionButton 
                        leftIcon 
                        title={button.title} 
                        subtitle={button.subtitle}
                        favicon={button.favicon}
                        handleClick={()=>console.log('log')}
                        />
                    ))}  
                </div>
            </div>
        </div>
    )
}