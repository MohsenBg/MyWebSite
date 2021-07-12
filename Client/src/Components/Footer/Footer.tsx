import React from "react";
import "./Footer.scss";
import logoImage from "../../Images/Logo/Logo.png";
import * as MdIcons from "react-icons/md";
import { IconsSocial } from "../Contact/Social_Icons";
const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="backgroundFooter">
        <div className="MainContent">
          <div className="columOne">
            <div className="contentColumOne">
              <div className="logo">
                <img src={logoImage} alt="Logo" />
                <div className="logoName">M o h s e n B g</div>
              </div>
              <div className="aboutUs">
                <h1>About us</h1>
                <p>
                  Hello My Name is Mohsen And I'm a young developer and built
                  this webSite.
                </p>
              </div>
              <div className="contactUs">
                <h1>Contact us</h1>
                <div className="contactList">
                  <div className="IconContact">
                    <MdIcons.MdEmail />
                  </div>
                  <span>Moh.1380.1393@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="columTwo">
            <div className="contentInformation">
              <h1>Information</h1>
              <a href="/">Home</a>
              <a href="/Project">Project</a>
              <a href="/About">About</a>
              <a href="/https://karboom.io/cv/maklvg/alfa?t=1623701298693">
                MyResume
              </a>
              <a href="https://github.com/MohsenBg">GitHub</a>
            </div>
          </div>
          <div className="columThree">
            <div className="contentCertificate">
              <h1>certificate</h1>
              <a href="https://pasteboard.co/KaNzwSk.png">ReactJS</a>
              <a href="https://pasteboard.co/KaNzeUP.jpg">Control Git</a>
            </div>
            <div className="contentSourceCode">
              <h1>sourceCode</h1>
              <a href="https://github.com/MohsenBg/DemoProject">demoProject</a>
              <a href="https://github.com/MohsenBg/MusicPlayer">MusicPlayer</a>
              <a href="https://github.com/MohsenBg/MyWebSite">MyWebSite</a>
            </div>
          </div>
        </div>
        <div className="BottomContentFooter">
          <div className="SocialMedia">
            <div className="IconsContainer">
              {IconsSocial.map((icon) => (
                <div className="IconContainerFooter" key={icon.id}>
                  <a href={icon.link}>
                    <div className="IconFooterSize">
                      <icon.iconName />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
