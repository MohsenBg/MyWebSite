import { TecData } from "../../../interface/I_project";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiTypescript,
  SiNextdotjs,
  SiSolidity,
  SiReact,
  SiExpress,
  SiRedux,
  SiMysql,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { DiCss3, DiJavascript1, DiSass } from "react-icons/di";

export const tecData: TecData = {
  Html5: {
    id: 1,
    name: "HTML5",
    icon: AiFillHtml5,
  },
  CSS3: {
    id: 2,
    name: "CSS3",
    icon: DiCss3,
  },
  SASS: {
    id: 3,
    name: "SASS",
    icon: DiSass,
  },
  JavaScript: {
    id: 4,
    name: "JavaScript",
    icon: DiJavascript1,
  },
  TypeScript: {
    id: 5,
    name: "TypeScript",
    icon: SiTypescript,
  },
  NEXT_JS: {
    id: 6,
    name: "NextJs",
    icon: SiNextdotjs,
  },
  React: {
    id: 7,
    name: "React",
    icon: SiReact,
  },
  Redux: {
    id: 8,
    name: "Redux",
    icon: SiRedux,
  },
  NODE_JS: {
    id: 9,
    name: "NODEJS",
    icon: SiNodedotjs,
  },
  Express: {
    id: 10,
    name: "Express",
    icon: SiExpress,
  },
  Mongo_DB: {
    id: 11,
    name: "MongoDB",
    icon: SiMongodb,
  },
  Mysql: {
    id: 12,
    name: "Mysql",
    icon: SiMysql,
  },
  Solidity: {
    id: 13,
    name: "Solidity",
    icon: SiSolidity,
  },
  Truffle: {
    id: 14,
    name: "truffle",
    icon: null,
  },
  Ganache_cli: {
    id: 15,
    name: "Ganache-cli",
    icon: null,
  },
};
