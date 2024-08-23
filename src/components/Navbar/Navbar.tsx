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
        <div>
            <div className={navbar.navbar}>
                <div className={navbar.navbar_content}>
                    <img src={Logo} alt="Beresin" />
                    <div className={navbar.navigation}>
                        <div className={navbar.menuIcon} onClick={toggleMenu}>
                            {isMenuOpen ? ( 
                                <span>&times;</span>
                            ):(
                                <span>&#9776;</span>
                            )}
                        </div>
                        <div className={`${navbar.navigation_content}`}>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li>
                                    <div className={navbar.dropdown} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                        <Link to={'/services'} className={navbar.dropdown_toggle}>
                                            Services <i className="fa fa-caret-down"></i>
                                        </Link>
                                        {isDropdownOpen && (
                                            <ul className={navbar.dropdown_menu}>
                                                <li><Link to="/service-details">Service Details</Link></li>
                                            </ul>
                                        )}
                                    </div>
                                </li>
                                <li>
                                    <div className={navbar.dropdown} onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
                                        <Link to={'/page'} className={navbar.dropdown_toggle}>
                                            Page <i className="fa fa-caret-down"></i>
                                        </Link>
                                        {isDropdownOpen2 && (
                                            <ul className={navbar.dropdown_menu}>
                                                <li><Link to="/team">Team</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/testimonials">Testimonials</Link></li>
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
            
            <div className={`${navbar.navigation_content_mobile} ${isMenuOpen ? navbar.active : ""}`}>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li>
                <div className={`${navbar.dropdown} ${isDropdownOpen ? navbar.show : ""}`}>
                  <div className={navbar.dropdown_toggle} onClick={toggleDropdown}>
                    <Link to={'/'}>Services <i className="fa fa-caret-down"></i></Link>
                  </div>
                  {isDropdownOpen && (
                    <ul className={navbar.dropdown_menu}>
                      <li><Link to="/service-details">Service Details</Link></li>
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <div className={`${navbar.dropdown} ${isDropdownOpen2 ? navbar.show : ""}`}>
                  <div className={navbar.dropdown_toggle} onClick={toggleDropdown2}>
                    <Link to={'/'}>Page <i className="fa fa-caret-down"></i></Link>
                  </div>
                  {isDropdownOpen2 && (
                    <ul className={navbar.dropdown_menu}>
                      <li><Link to="/team">Team</Link></li>
                      <li><Link to="/pricing">Pricing</Link></li>
                      <li><Link to="/testimonials">Testimonials</Link></li>
                    </ul>
                  )}
                </div>
              </li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

    );
}
