import { Link } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import profile from "../../styles/ProfilePages/Profile.module.scss"

export function Profile(){
    return(
        <div className={profile.profile}>
            <Sidebar></Sidebar>
            <div className={profile.profile}>
                <div>
                    <img src="" alt="profile" />
                    <div>
                        <h2>Alexandra / Edit Profile</h2>
                        <small>Update your username and manage your personal information</small>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/">Edit Profile</Link>
                        <Link to="/">Password</Link>
                        <Link to="/">Work preferences</Link>
                        <Link to="/">Notifications</Link>
                        <Link to="/">Delete Account</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className=""></div>
        </div>
    )
}