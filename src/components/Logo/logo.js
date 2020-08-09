import React from "react";
import logo from "../../assets/aku_favicon.jpg";
import MainLogo from "../../assets/AKU_HOSPITAL_LOGO.gif";

const Logo = () => {

  return (
    <div className="container-fluid clearfix">
      <div className="ml-3">
        <img src={logo} className="text-right ml-3 p-3" alt="logo Title " />
        <span className="font-weight-bolder">Aga Khan University</span>
        <div className="float-right pt-2 pr-5">
          <ul className="social-network social-circle">
            <li>
              <a
                href="https://www.facebook.com/hamzayousuf21"
                className="icoFacebook"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hamzayousuf121/"
                className="icoTwitter"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCjIDnm8ruLfiyBzijqGUlmQ"
                className="icoRss"
                title="Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hamzayousuf121/"
                className="icoLinkedin"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hamzayousuf121/"
                className="icoTwitter"
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://webhost112.blogspot.com"
                className="icoRss"
                title="Blogger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-btc"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-bottom-5 "></div>
      <div className="container">
        <div className="social-icons pull-left social-icons-left">
          <ul className="list-unstyled">
            <li>
              <img className="img-fluid" src={MainLogo} alt="AKUH" />
            </li>
          </ul>
        </div>
      </div><br />
    </div>
  );
};
export default Logo;
