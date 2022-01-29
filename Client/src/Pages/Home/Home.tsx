import React, { useState } from "react";
import "./Home.scss";
import Blue_Button from "../../Components/extra_features/buttonResume/Blue_button";
import Button_Contact from "../../Components/extra_features/buttonContact/button_Contact";
import Contact from "../../Components/Contact/Contact";

const Home: React.FC = () => {
  const [contactStatus, setContactStatus] = useState<boolean>(false);
  const [statusOfClassContact, SetStatusOfClassContact] =
    useState<boolean>(false);

  const ContactOnClick = () => {
    setContactStatus(true);
  };

  const ContactClose = () => {
    SetStatusOfClassContact(true);
    setTimeout(() => {
      setContactStatus(false);
      SetStatusOfClassContact(false);
    }, 500);
  };

  return (
    <div className="containerHome">
      <div className="mainContainerDiv">
        <div className="titleHomeDiv">
          <b className="titleHomePage">
            <span>M</span>ohsen<span> B</span>agheri
          </b>
        </div>
        <div className="resume">
          <Blue_Button />
        </div>
        <div className="ButtonContact" onClick={() => ContactOnClick()}>
          <Button_Contact />
        </div>
        {contactStatus && (
          <div
            className={
              statusOfClassContact ? "animationContact" : "ContactMainDiv"
            }
          >
            <Contact Close={() => ContactClose()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
