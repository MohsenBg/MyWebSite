import React, { useState } from "react";
import "./About.scss";
import * as IoIcons from "react-icons/io";

interface props {
  items: any;
}

const UpdatingMapAbout: React.FC<props> = (Items) => {
  const [AboutItems, setAboutItems] = useState<any>(Items.items);
  const handlePanel = (id: number) => {
    let NewAboutItems = AboutItems;
    let open = NewAboutItems[id - 1].open;
    NewAboutItems[id - 1].open = !open;
    const newItems = NewAboutItems.map((item: any) => ({
      ...item,
    }));
    setAboutItems(newItems);
  };
  return (
    <>
      {AboutItems.map((item: any) => {
        return (
          <div
            key={item.id}
            className={item.id % 2 == 0 ? "MySkillBox" : "MySkillBox BoxRight"}
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
                {item.paragraph2 !== undefined && <p>{item.paragraph2}</p>}
              </div>
              <div
                className={
                  item.open ? "arrow arrowActive" : "arrow arrowDisable"
                }
                onClick={() => handlePanel(item.id)}
              >
                <IoIcons.IoMdArrowDropright />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UpdatingMapAbout;
