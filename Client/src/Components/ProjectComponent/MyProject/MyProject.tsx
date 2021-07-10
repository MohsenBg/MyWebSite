import React, { useEffect, useState } from "react";
import "./MyProject.scss";
import { ImageProject01 } from "../ProjectImage/Projectimage01";
import { ImageProject02 } from "../ProjectImage/Projectimage02";
import * as SiIcons from "react-icons/si";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
const MyProject = () => {
  const [currentImageP01, setCurrentImageP01] = useState<number>(1);
  const [currentImageP02, setCurrentImageP02] = useState<number>(1);
  const [statusBtnP01, setStatusBtnP01] = useState<string>("Tec");
  const [statusBtnP02, setStatusBtnP02] = useState<string>("Tec");

  useEffect(() => {
    setTimeout(() => {
      if (ImageProject01.length > currentImageP01) {
        setCurrentImageP01(currentImageP01 + 1);
      } else {
        setCurrentImageP01(1);
      }
    }, 4000);
  }, [currentImageP01]);

  useEffect(() => {
    setTimeout(() => {
      if (ImageProject02.length > currentImageP02) {
        setCurrentImageP02(currentImageP02 + 1);
      } else {
        setCurrentImageP02(1);
      }
    }, 3000);
  }, [currentImageP02]);

  return (
    <div className="MyProjectsContainer">
      <div className="MyProjectContainer">
        <div className="ImageMyProjectForm">
          <div className="ImagesMyProject">
            {ImageProject01.map((img) => (
              <div key={img.id}>
                <img
                  alt="Image"
                  src={img.ImageSrc}
                  className={
                    currentImageP01 === img.id
                      ? "ImageMyProjectActive"
                      : "ImageMyProject"
                  }
                />
              </div>
            ))}
            <div className="doteMyProject">
              {ImageProject01.map((img) => (
                <div key={img.id}>
                  <div
                    className={
                      currentImageP01 === img.id
                        ? "doteImage"
                        : "doteImageActive"
                    }
                  >
                    <img.dote />
                  </div>
                </div>
              ))}
            </div>
            <div className="buttonsOfProject">
              <div
                className={statusBtnP01 === "Tec" ? "TecActive" : "btnTec"}
                onClick={() => setStatusBtnP01("Tec")}
              >
                Tec
              </div>
              <div
                className={
                  statusBtnP01 === "About" ? "AboutActive" : "btnAbout"
                }
                onClick={() => setStatusBtnP01("About")}
              >
                About
              </div>
              <div
                className={statusBtnP01 === "Link" ? "LinkActive" : "btnLink"}
                onClick={() => setStatusBtnP01("Link")}
              >
                Link
              </div>
            </div>
          </div>
          {statusBtnP01 === "Tec" && (
            <div className="tec">
              <h2 className="titleTec">tec</h2>
              <ol className="olTec">
                <li className="liTec">
                  Html 5
                  <div className="iconRedux">
                    <SiIcons.SiHtml5 />
                  </div>
                </li>
                <li className="liTec">
                  css 3
                  <div className="iconRedux">
                    <SiIcons.SiCss3 />
                  </div>
                </li>
                <li className="liTec">
                  javaScript
                  <div className="iconRedux">
                    <SiIcons.SiJavascript />
                  </div>
                </li>
                <li className="liTec">
                  react
                  <div className="iconRedux">
                    <GrIcons.GrReactjs />
                  </div>
                </li>
                <li className="liTec">
                  redux
                  <div className="iconRedux">
                    <SiIcons.SiRedux />
                  </div>
                </li>
                <li className="liTec">
                  Mysql
                  <div className="iconRedux">
                    <GrIcons.GrMysql />
                  </div>
                </li>
                <li className="liTec">
                  Mongodb
                  <div className="iconRedux">
                    <SiIcons.SiMongodb />
                  </div>
                </li>
                <li className="liTec">
                  express
                  <div className="iconRedux">
                    <SiIcons.SiAmericanexpress />
                  </div>
                </li>
              </ol>
            </div>
          )}
          {statusBtnP01 === "About" && (
            <div className="tec">
              <h2 className="titleTec">About</h2>
              <p className="AboutProject">
                it's a demo project user can login and sinUp. they can
                management information like personal info or Change password and
                a small home page. webSite responsive for mobile and desktop
              </p>
            </div>
          )}
          {statusBtnP01 === "Link" && (
            <div className="tec">
              <h2 className="titleTec">Link</h2>
              <a
                href="https://github.com/MohsenBg/DemoProject"
                className="LinkProject"
              >
                <AiIcons.AiFillGithub />
                <span>github</span>
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="MyProjectContainer">
        <div className="ImageMyProjectForm">
          <div className="ImagesMyProject">
            {ImageProject02.map((img) => (
              <div key={img.id}>
                <img
                  alt="ImageProject"
                  src={img.ImageSrc}
                  className={
                    currentImageP02 === img.id
                      ? "ImageMyProjectActive"
                      : "ImageMyProject"
                  }
                />
              </div>
            ))}
            <div className="doteMyProject doteMyProjectP">
              {ImageProject02.map((img) => (
                <div key={img.id}>
                  <div
                    className={
                      currentImageP02 === img.id
                        ? "doteImage"
                        : "doteImageActive"
                    }
                  >
                    <img.dote />
                  </div>
                </div>
              ))}
            </div>
            <div className="buttonsOfProject">
              <div
                className={statusBtnP02 === "Tec" ? "TecActive" : "btnTec"}
                onClick={() => setStatusBtnP02("Tec")}
              >
                Tec
              </div>
              <div
                className={
                  statusBtnP02 === "About" ? "AboutActive" : "btnAbout"
                }
                onClick={() => setStatusBtnP02("About")}
              >
                About
              </div>
              <div
                className={statusBtnP02 === "Link" ? "LinkActive" : "btnLink"}
                onClick={() => setStatusBtnP02("Link")}
              >
                Link
              </div>
            </div>
          </div>
          {statusBtnP02 === "Tec" && (
            <div className="tec">
              <h2 className="titleTec">tec</h2>
              <ol className="olTec">
                <li className="liTec">
                  Html 5
                  <div className="iconRedux">
                    <SiIcons.SiHtml5 />
                  </div>
                </li>
                <li className="liTec">
                  css 3
                  <div className="iconRedux">
                    <SiIcons.SiCss3 />
                  </div>
                </li>
                <li className="liTec">
                  Sass
                  <div className="iconRedux">
                    <SiIcons.SiSass />
                  </div>
                </li>
                <li className="liTec">
                  react
                  <div className="iconRedux">
                    <GrIcons.GrReactjs />
                  </div>
                </li>
                <li className="liTec">
                  TypeScript
                  <div className="iconRedux">
                    <SiIcons.SiTypescript />
                  </div>
                </li>
                <li className="liTec">
                  redux
                  <div className="iconRedux">
                    <SiIcons.SiRedux />
                  </div>
                </li>
                <li className="liTec">
                  javaScript
                  <div className="iconRedux">
                    <SiIcons.SiJavascript />
                  </div>
                </li>
              </ol>
            </div>
          )}
          {statusBtnP02 === "About" && (
            <div className="tec">
              <h2 className="titleTec">About</h2>
              <p className="AboutProject">
                It project is my web site and you can see my source code on
                github web site full responsive for the mobile and desktop and
                it's the simple web with cool UI! Is it?
              </p>
            </div>
          )}

          {statusBtnP02 === "Link" && (
            <div className="tec">
              <h2 className="titleTec">Link</h2>
              <a
                href="https://github.com/MohsenBg/MyWebSite"
                className="LinkProject"
              >
                <AiIcons.AiFillGithub />
                <span>github</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
