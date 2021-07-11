import React, { useState, useEffect } from "react";
import "./About.scss";
import profileImage from "../../Images/AboutImage/profileMohsenLow.webp";
import * as GiIcons from "react-icons/gi";
import { AboutItem } from "../../Items/About/AboutItems";
import UpdatingMapAbout from "./UpdatingMapAbout";

const About: React.FC = () => {
  const [AboutItems, setAboutItems] = useState(AboutItem);

  return (
    <div className="AboutContainer">
      <div className="FillNavBar" />
      <div className="AboutMainContainer">
        <div className="sectionOneAbout">
          <div className="textAboutPage">
            <h1>About Me</h1>
            <div className="PAboutPage">
              <p>
                Hello My Name is Mohsen And I'm a young developer and built this
                webSite.
              </p>
              <p>
                I work as front-end developer but i know RestApi to , like
                mongoDb and Mysql!
              </p>
              <p>
                I So much like learning about programming and like work with a
                team to !
              </p>
            </div>
          </div>
          <div className="ImageMe">
            <img
              className="profileImage"
              src={profileImage}
              alt="sever not responsive"
            />
            <div className="StickIcon">
              <GiIcons.GiStickingPlaster />
            </div>
          </div>
        </div>
        <div className="SectionTwoAboutPage">
          <div className="allBoxes">
            <h1 className="titleAboutPage">MySkills</h1>
            <UpdatingMapAbout items={AboutItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
