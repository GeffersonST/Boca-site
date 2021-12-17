import React from "react";
import logo from "../../components/assets/logofinale12.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterWrap">
        <div className="SocialMedia">
          <div className="SocialMediaWrap">
            <div className="SocialLogo" to="/">
              {" "}
              <img src={logo} alt="logo" />
            </div>
            <div className="SocialIcons">
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
