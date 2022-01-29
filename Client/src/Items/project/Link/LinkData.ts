import { AiOutlineGithub } from "react-icons/ai";
import { IoMdBrowsers } from "react-icons/io";
import { typeLink } from "../../../interface/I_project";

export const linkData = (type: typeLink, link: string) => {
  switch (type) {
    case typeLink.GIT_HUB:
      return github(link);
      break;
    case typeLink.WEB_SITE:
      return website(link);
      break;
    default:
      break;
  }
};

const github = (link: string) => {
  return {
    id: 1,
    name: "github",
    icon: AiOutlineGithub,
    link,
  };
};
const website = (link: string) => {
  return {
    id: 2,
    name: "website",
    icon: IoMdBrowsers,
    link,
  };
};
