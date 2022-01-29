import "./MyProject.scss";
import Footer from "../../Footer/Footer";
import { projectsData } from "../../../Items/project/projectsData";
import Project from "./Project";
const MyProject = () => {
  return (
    <>
      <div className="projects">
        {projectsData.map((Data) => {
          return <Project projectData={Data} key={Data.id} />;
        })}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MyProject;
