import React, { Component } from "react";
import "./Contact.scss";
import * as AiIcons from "react-icons/ai";

interface props {
  Close: () => void;
}

const Contact: React.FC<props> = ({ Close }) => {
  return (
    <div className="ContactContainer">
      <div className="backgroundContact">
        <div className="IconClose" onClick={Close}>
          <AiIcons.AiFillCloseCircle />
        </div>
        <h1>Contact Me</h1>
      </div>
    </div>
  );
};

export default Contact;
