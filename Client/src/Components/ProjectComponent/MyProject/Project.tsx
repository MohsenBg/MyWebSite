import React, { FunctionComponent, useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { ProjectData } from "../../../interface/I_project";

interface props {
  projectData: ProjectData;
}

enum SECTION {
  ABOUT = "ABOUT",
  TEC = "TEC",
  LINK = "LINK",
}

const Project: FunctionComponent<props> = ({ projectData }) => {
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [time, setTime] = useState(4000);
  const [section, setSection] = useState(SECTION.ABOUT);

  const imageOrientation = (src: string) => {
    let orientation,
      img = new Image();
    img.src = src;

    if (img.naturalWidth > img.naturalHeight) {
      orientation = "landscape";
    } else {
      orientation = "portrait";
    }

    return orientation;
  };
  useEffect(() => {
    const random = Math.ceil(Math.random() * 2000) + 3000;
    setTime(random);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (projectData.Image.length > currentImage) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(1);
      }
    }, time);
  }, [currentImage]);

  return (
    <div className="project">
      <div className="card">
        <div className="image">
          {projectData.Image.map((image) => {
            if (image.id === currentImage) {
              return (
                <div
                  className="img"
                  key={image.id}
                  style={{ backgroundImage: `url(${image.ImageSrc})` }}
                />
              );
            }
          })}
          <div className="dots">
            {projectData.Image.map((image) => {
              return (
                <div
                  key={image.id}
                  className="dot"
                  style={image.id === currentImage ? { color: "white" } : {}}
                >
                  <GoPrimitiveDot />
                </div>
              );
            })}
          </div>
        </div>
        <div className="dataSection">
          <div
            className={
              section === SECTION.ABOUT ? "btn About btnActive" : "btn About"
            }
            onClick={() => setSection(SECTION.ABOUT)}
          >
            About
          </div>
          <div
            className={
              section === SECTION.TEC ? "btn Tec btnActive" : "btn Tec"
            }
            onClick={() => setSection(SECTION.TEC)}
          >
            Tec
          </div>
          <div
            className={
              section === SECTION.LINK ? "btn Link btnActive" : "btn Link"
            }
            onClick={() => setSection(SECTION.LINK)}
          >
            Link
          </div>

          <div className="safeData">
            {section === SECTION.ABOUT && (
              <div className="AboutSection">
                <div className="title">{projectData.about.title}</div>
                <div className="body">{projectData.about.body}</div>
              </div>
            )}
            {section === SECTION.TEC && (
              <div className="TecSection">
                <div className="title">Tec</div>
                <div className="tecs">
                  {projectData.Tec.map((tec) => {
                    return (
                      <div className="tec" key={tec.id}>
                        <div className="tecName">{tec.name}</div>
                        {tec.icon !== null ? (
                          <div className="tecLogo">
                            <tec.icon />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {section === SECTION.LINK && (
              <div className="LinkSection">
                <div className="title">Link</div>
                <div className="links">
                  {projectData.Link.map((link) => {
                    if (typeof link !== "undefined") {
                      return (
                        <div className="link" key={link?.id}>
                          <a href={link.link} target="_blank">
                            <div className="linkLogo">
                              <link.icon />
                            </div>
                            <div className="linkName">{link?.name}</div>
                          </a>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
