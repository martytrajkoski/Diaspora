import "../../styles/footer/Footer.scss";
import logo from "../../assets/logo-white.png";
import facebook from "../../assets/footer/socials/facebook-svgrepo-com.svg"
import twitter from "../../assets/footer/socials/twitter-round-svgrepo-com.svg"
import youtube from "../../assets/footer/socials/youtube-svgrepo-com.svg"
import phone from "../../assets/footer/phone-svgrepo-com.svg"
import location from "../../assets/footer/location-pin-svgrepo-com.svg"

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="logo-links">
            <div className="logo">
              <img src={logo} alt="Company-Logo" />
              <p>
                Leo elementum iaculis quam massa vitae <br />
                odio sed. Morbi tincidunt senectus.
              </p>
              <div className="socials">
              <div><a href="https://www.facebook.com/"><img src={facebook} alt="Facebook"  /></a></div>
              <div><a href="https://www.x.com/"><img src={twitter} alt="Twitter"  /></a></div>
              <div><a href="https://www.youtube.com/"><img src={youtube} alt="Facebook"  /></a></div> 
              </div>
            </div>
            <div className="links">
              <ul>
                <h1>Navigation</h1>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Our Services</a>
                <a href="">Our Team</a>
              </ul>
              <ul>
                <h1>Services</h1>
                <a href="">Kitchen Cleaning</a>
                <a href="">Office Cleaning</a>
                <a href="">Carpet Cleaning</a>
                <a href="">House Cleaning</a>
              </ul>
              <ul>
                <h1>Contact Us</h1>
                <p>
                  Our Support and Sales team is available 24/7 <br />
                  to answer your queries
                </p>
                <a href=""><img src={location} alt="location" />123 Main St, Suite 500, New York, NY 10001</a>
                <a href=""><img src={phone} alt="number" />+1 (333) 000-0000</a>
              </ul>
            </div>
          </div>
          <div className="border"></div>
          <div className="copyright">
            <div className="name"><p>COPYRIGHT © 2023 BERESIN</p></div>
            <div className="policy">
                <p>TERMS OF USE</p>
                <div className="border-policy"></div>
                <p>PRIVACY POLICY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
