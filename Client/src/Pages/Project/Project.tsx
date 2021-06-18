import React, { useState } from "react";
import "./Project.scss";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import { Image } from "./ImageOfProject/ImageOfProject";
import { url } from "inspector";

const Project: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<number>(1);

  const nextImage = () => {
    if (Image.length > currentImage) {
      setCurrentImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage > 1) {
      setCurrentImage(currentImage - 1);
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
            {Image.map((img) => (
              <div key={img.id}>
                <img
                  className={
                    currentImage === img.id
                      ? "imageProjectSide sideImageActive"
                      : "imageProjectSide sideImage"
                  }
                  src={img.imageUrl}
                />
              </div>
            ))}

            <div className="dotIcons">
              <GoIcons.GoPrimitiveDot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
