import logo from "../../assets/Diaspora_logo.png"
import profile_custom from "../../styles/ProfilePages/ProfileCustomization.module.scss"
import pp1 from "../../assets/ProfileCustomization/pp1.jpg"
import { Button } from "../../components/Button/Button"

const defaultPictures = [ {"color":"#797695"}, {"color":"#E4C0DB"}, {"color":"#F69BBC"}, {"color":"#F4E6F1"}, {"color":"#F37AA5"}, {"color":"#4C4872"}];

export function ProfileCustomization(){
    return(
        <div className={profile_custom.profile_custom}>
            <div className={profile_custom.container}>
                <div className={profile_custom.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={profile_custom.content}>
                    <div className={profile_custom.profile}>
                        <h1>Welcome! Let’s create your profile</h1>
                        <small>Let the Property Owners get to know you!</small>
                        <div>
                            <h2>Add a profile picture</h2>
                            <div className={profile_custom.profile_picture}>
                                <img src={pp1} alt="" />
                                <div className={profile_custom.choose_picture}>
                                    <Button title="Choose Image" className={profile_custom.btn_choose} handleClick={()=>console.log('btn')}/>
                                    <div>
                                        <small><i className="fa fa-caret-down"></i>  Or choose one of our defaults</small>
                                        <div className={profile_custom.default_pictures}>
                                            {defaultPictures.map((picture) => (
                                                <div key={picture.color} style={{backgroundColor: picture.color, width: "46px", height: "46px", borderRadius: "100%"}} className={profile_custom.picture}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h2>Add your location</h2>
                            <select name="" id="">
                                <option value="" selected>Struga</option>
                                <option value="">Radozda</option>
                            </select>
                        </div> */}
                        <div>
                            <Button title="Continue" className={profile_custom.btn_submit} handleClick={()=>console.log('submit')}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={profile_custom.footer}>

            </div>
        </div>
    )
}