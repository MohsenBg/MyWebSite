import React, { useState, useEffect } from "react";
import "./Project.scss";
import * as AiIcons from "react-icons/ai";
import { Image } from "./ImageOfProject/ImageOfProject";

const Project: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(1);
  const [autoImageStatus, setAutoImageStatus] = useState<boolean>(true);

  useEffect(() => {
    if (autoImageStatus) {
      setTimeout(() => {
        if (Image.length > currentImage) {
          setCurrentImage(currentImage + 1);
        } else {
          setCurrentImage(1);
        }
      }, 7000);
    }
  }, [currentImage, autoImageStatus]);

  const nextImage = () => {
    setAutoImageStatus(false);
    if (Image.length > currentImage) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(1);
    }
  };

  const previousImage = () => {
    setAutoImageStatus(false);
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(Image.length);
    }
  };

  const autoShowImage = () => {
    if (currentImage > 1) {
      setAutoImageStatus(!autoImageStatus);
    }
  };

  return (
    <div className="ProjectContainer">
      <div className="Filter" />
      <div className="MainProjectPage">
        <div className="imgSizeForm">
          <div className="imgForme">
            <div className="RightArrow" onClick={() => nextImage()}>
              <AiIcons.AiFillRightCircle />
            </div>
            <div className="LeftArrow" onClick={() => previousImage()}>
              <AiIcons.AiFillLeftCircle />
            </div>
            <div
              className={
                autoImageStatus
                  ? "btnAutoImage btnAutoImageOn"
                  : "btnAutoImage btnAutoImageOff"
              }
              onClick={() => autoShowImage()}
            >
              AutoShow {autoImageStatus ? "On" : "Off"}
            </div>
            {Image.map((img) => (
              <div key={img.id}>
                <img
                  className={
                    currentImage === img.id
                      ? "imageProjectSide sideImageActive"
                      : "imageProjectSide sideImage"
                  }
                  src={img.imageUrl}
                  alt="server didn't response"
                />
              </div>
            ))}
            <div className="doteContainer">
              {Image.map((img) => (
                <div key={img.id}>
                  <div
                    className={
                      currentImage === img.id ? "dote doteActive" : "dote"
                    }
                  >
                    <img.dote />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
