import { Link } from "react-router-dom";
import image from "../../assets/img.jpg";
import profile from '../../styles/navbar-profile/Profile.module.scss'


export default function Profile () {
    return (
        <>
        <div className={profile["navbar-container"]}>
        <div className={profile["profile-wrapper"]}>
          <div className={profile["profile"]}>
            <div className={profile["profile-image"]}>
              <img src={image} alt="Profile-image" />
            </div>
            <div className={profile["profile-name"]}>
              <Link to="/">Alexandra Evans</Link>
              <Link to="/">Service Provider</Link>
            </div>
            <div className={profile["btn"]}>
              <i className="fa fa-caret-down" style={{ color: "#F0598F" }}></i>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}