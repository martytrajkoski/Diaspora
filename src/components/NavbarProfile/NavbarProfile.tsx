import "../../styles/navbar-profile/NavbarProfile.scss";
import image from "../../assets/img.jpg";
import { Link } from "react-router-dom";

export default function NavbarProfile() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <Link to="/">
            {" "}
            <div className="navbar-logo">
              <p>diaspora.</p>
              <p>home</p>
            </div>
          </Link>
          <div className="navbar-profile">
            <div className="profile-image">
              <img src={image} alt="Profile-image" />
            </div>
            <div className="profile-name">
              <Link to="/">Alexandra Evans</Link>
              <Link to="/">Service Provider</Link>
            </div>
            <div className="btn">
              <i className="fa fa-caret-down" style={{ color: "#F0598F" }}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
