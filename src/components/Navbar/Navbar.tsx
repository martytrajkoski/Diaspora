import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import navbar from "../../styles/navbar/Navbar.module.scss";
import { Button } from "../Button/Button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
};

const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
};

  return (
    <div className={navbar.navbar}>
      <div className={navbar.navbar_content}>
        <img src={Logo} alt="Beresin" />
        <div className={navbar.navigation}>
            <div className={navbar.menuIcon} onClick={toggleMenu}>
            &#9776;
            </div>
            <div className={`${navbar.navigation_content} ${isMenuOpen ? navbar.active : ''}`}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>
                        <div className={navbar.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link to={'/services'} className={navbar.dropdown_toggle}>Services</Link>
                            {isDropdownOpen && (
                                <ul className={navbar.dropdown_menu}>
                                    <li><Link to="/service-detaols">Service Details</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <div className={navbar.dropdown} onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                            <Link to={'/services'} className={navbar.dropdown_toggle}>Page</Link>
                            {isDropdownOpen2 && (
                                <ul className={navbar.dropdown_menu}>
                                    <li><Link to="/service-detaols">Team</Link></li>
                                    <li><Link to="/service-detaols">Pricing</Link></li>
                                    <li><Link to="/service-detaols">Testimonials</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <Link to="/">
                    <Button
                    title="Get Started"
                    className={navbar.nav_btn}
                    handleClick={() => console.log("Clicked")}
                    />
                </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
