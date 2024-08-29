import { Link } from "react-router-dom"
import sidebar from "../../styles/sidebar/Sidebar.module.scss"
import DiasporaLogo from "../../assets/Diaspora_logo.png"

export function Sidebar(){
    return(
        <div className={sidebar.sidebar}>
            <div className={sidebar.logo}>
                <img src={DiasporaLogo} alt="" />
            </div>
            <div>
                <Link to="/"><i className="fa fa-regular fa-calendar"></i>Overview</Link>
                <Link to="/"><i className="fa fa-regular fa-calendar"></i>Schedule</Link>
                <Link to="/"><i className="fa fa-solid fa-money"></i>Payments</Link>
                <Link to="/"><i className="fa fa-solid fa-building-o"></i>Government regulation</Link>
                <Link to="/">Contracts</Link>
                <Link to="/profile-customization/user"><i className="fa fa-gear"></i>Settings</Link>
            </div>
        </div>
    )
}