import React from "react";
import "./Contact.scss";
import * as AiIcons from "react-icons/ai";
import { IconsSocial } from "./Social_Icons";

interface props {
  Close: () => void;
}

const Contact: React.FC<props> = ({ Close }) => {
  return (
    <div className="ContactContainer">
      <div className="backgroundContact">
        <h1>Contact Me</h1>
        <div className="IconClose" onClick={Close}>
          <AiIcons.AiFillCloseCircle />
        </div>
        <div className="IconsContainer">
          {IconsSocial.map((icon) => (
            <div className="IconContainer" key={icon.id}>
              <a href={icon.link}>
                <div className="Icon">
                  <icon.iconName />
                </div>
                <span>{icon.Name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
