import React, { useState, useEffect } from "react";
import "./About.scss";
import profileImage from "../../Images/AboutImage/profileMohsenLow.webp";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import { AboutItem } from "../../Items/About/AboutItems";

const About: React.FC = () => {
  const [AboutItems, setAboutItems] = useState(AboutItem);

  const openStatusPanel = (id: number) => {
    let newAboutItems = AboutItems;
    let newOpen = AboutItems[id - 1].open;
    newAboutItems[id - 1].open = !newOpen;
    setAboutItems(newAboutItems);
    console.log(AboutItems);
  };

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
            {AboutItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    item.id % 2 == 0 ? "MySkillBox" : "MySkillBox BoxRight"
                  }
                >
                  <div className="SkillBtn">
                    <p>{item.MainTitle}</p>
                  </div>

                  <div
                    className={
                      item.open
                        ? "detailsSkills detailsSkillsActive"
                        : "detailsSkills detailsSkillsDisable"
                    }
                  >
                    <div
                      className={
                        item.id % 2 == 0
                          ? "textOfSkill"
                          : "textOfSkill textOfSkillRight"
                      }
                    >
                      <h3>{item.Title2}</h3>

                      <h5>{item.Title3}</h5>
                      <p>{item.paragraph1}</p>
                      {item.Title4 !== undefined && <h5>{item.Title3}</h5>}
                      {item.paragraph2 !== undefined && (
                        <p>{item.paragraph2}</p>
                      )}
                    </div>
                    <div
                      className={
                        item.open ? "arrow arrowActive" : "arrow arrowDisable"
                      }
                      onClick={() => openStatusPanel(item.id)}
                    >
                      <IoIcons.IoMdArrowDropright />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
