import React, { useState } from "react";
import "./About.scss";
import profileImage from "../../Images/AboutImage/profileMohsenLow.webp";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

const About: React.FC = () => {
  //React
  const [statusOfSkillPanelReact, setStatusOfSkillPanelReact] =
    useState<Boolean>(true);
  const [statusOfSkillAnimeReact, setStatusOfSkillAnimeReact] =
    useState<Boolean>(true);

  //Redux
  const [statusOfSkillPanelRedux, setStatusOfSkillPanelRedux] =
    useState<Boolean>(true);

  //Html/css3
  const [statusOfSkillPanelHtml5Css3, setStatusOfSkillPanelHtml5Css3] =
    useState<Boolean>(true);

  //javaScript
  const [statusOfSkillPanelJavaScript, setStatusOfSkillPanelJavaScript] =
    useState<Boolean>(true);

  //TypeScript
  const [statusOfSkillPanelTypeScript, setStatusOfSkillPanelTypeScript] =
    useState<Boolean>(true);

  //sass
  const [statusOfSkillPanelSass, setStatusOfSkillPanelSass] =
    useState<Boolean>(true);

  //Mysql
  const [statusOfSkillPanelMySql, setStatusOfSkillPanelMySql] =
    useState<Boolean>(true);

  //mongoDb
  const [statusOfSkillPanelMongoDb, setStatusOfSkillPanelMongoDb] =
    useState<Boolean>(true);

  //React

  const ReactOnClick = () => {
    setStatusOfSkillPanelReact(!statusOfSkillPanelReact);
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

            <div className="MySkillBox">
              <div className="SkillBtn">
                <p>React</p>
              </div>

              <div
                className={
                  statusOfSkillPanelReact
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill">
                  <h3>what I know about React</h3>

                  <h5>ClassComponent</h5>
                  <p>
                    Rendering Elements , Components and Props , State and
                    Lifecycle,Handling Events, State and Lifecycle, Conditional
                    Rendering,Lists and Keys
                  </p>
                  <h5>Functional Component (Hooks)</h5>
                  <p>
                    Rendering Elements , Components and Props , State and
                    Lifecycle,Handling Events, State and Lifecycle, Conditional
                    Rendering,Lists and Keys,Using the Effect Hook,Rules of
                    Hooks
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelReact
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() => ReactOnClick()}
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox BoxRight">
              <div className="SkillBtn">
                <p>Redux</p>
              </div>

              <div
                className={
                  statusOfSkillPanelRedux
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill textOfSkillRight">
                  <h3>what I know about Redux</h3>

                  <h5>Redux</h5>
                  <p>
                    Action(type and payload), Reducer + State , dispatchStore,
                    actionType debug redux, connection with hook like
                    useDispatch and useState and classComponent or hook use
                    connection and dispatch or State to props.
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelRedux
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelRedux(!statusOfSkillPanelRedux)
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox">
              <div className="SkillBtn">
                <p>Html5/Css3</p>
              </div>

              <div
                className={
                  statusOfSkillPanelHtml5Css3
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill">
                  <h3>what I know about Html5/css3</h3>

                  <h5>Html5</h5>
                  <p>
                    not all tags but many of tags , add script and style in html
                    but not recommended, meta and ...
                  </p>
                  <h5>css3</h5>
                  <p>
                    flex box, grid , border, padding , object , position like
                    absolute relative fix sticky and ... ,adding Style to text
                    or div and img or ... ,svg , transition and animation
                    (keyframes and ... ).
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelHtml5Css3
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelHtml5Css3(!statusOfSkillPanelHtml5Css3)
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox BoxRight">
              <div className="SkillBtn">
                <p>JavaScript</p>
              </div>
              <div
                className={
                  statusOfSkillPanelJavaScript
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill textOfSkillRight">
                  <h3>what I know about JavaScript</h3>
                  <h5>JavaScript</h5>
                  <p>
                    basic of programing language Like loop while Condition like
                    if and switch ... ,ECM6 , important function like map filter
                    ... and event handler like onclick ...,access to dom or html
                    add element and more ...
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelJavaScript
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelJavaScript(
                      !statusOfSkillPanelJavaScript
                    )
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox">
              <div className="SkillBtn">
                <p>TypeScript</p>
              </div>
              <div
                className={
                  statusOfSkillPanelTypeScript
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill ">
                  <h3>what I know about TypeScript</h3>
                  <h5>TypeScript</h5>
                  <p>
                    defined type like react ClassComponent or hook and redux and
                    type of most function and event handler , make interface or
                    class
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelTypeScript
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelTypeScript(
                      !statusOfSkillPanelTypeScript
                    )
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox BoxRight">
              <div className="SkillBtn">
                <p>Sass</p>
              </div>
              <div
                className={
                  statusOfSkillPanelSass
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill textOfSkillRight">
                  <h3>what I know about Sass</h3>

                  <p>
                    function , mixin , partials , Condition , variables ,nest
                    make loop and so many futures ...
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelSass
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelSass(!statusOfSkillPanelSass)
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox">
              <div className="SkillBtn">
                <p>MySql</p>
              </div>

              <div
                className={
                  statusOfSkillPanelMySql
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill ">
                  <h3>what I know about Mysql</h3>

                  <h5>MySql</h5>
                  <p>
                    not much know only basic like make date base schema make
                    post pull or delete and get with express and sql and also
                    know basic of query like change table or join table delete
                    it add colum and ...
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelMySql
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelMySql(!statusOfSkillPanelMySql)
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
            <div className="MySkillBox BoxRight">
              <div className="SkillBtn">
                <p>MongoDb</p>
              </div>
              <div
                className={
                  statusOfSkillPanelMongoDb
                    ? "detailsSkills detailsSkillsActive"
                    : "detailsSkills detailsSkillsDisable"
                }
              >
                <div className="textOfSkill textOfSkillRight">
                  <h3>what I know about MongoDb</h3>

                  <h5>MongoDb</h5>
                  <p>
                    know only basic mongo work with atlas and make date base
                    schema document know json make post pull or delete and get
                    with express and axios and also know some function og mongo
                    like save or findById and.. it add colum and ..., make
                    router
                  </p>
                </div>
                <div
                  className={
                    statusOfSkillPanelMongoDb
                      ? "arrow arrowActive"
                      : "arrow arrowDisable"
                  }
                  onClick={() =>
                    setStatusOfSkillPanelMongoDb(!statusOfSkillPanelMongoDb)
                  }
                >
                  <IoIcons.IoMdArrowDropright />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
