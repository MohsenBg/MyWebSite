import { linkData } from "./Link/LinkData";
import { ProjectData, typeLink } from "./../../interface/I_project";
import { tecData } from "./Tec/TecData";

const path = "projects";

const {
  Html5,
  CSS3,
  SASS,
  JavaScript,
  TypeScript,
  NEXT_JS,
  React,
  Redux,
  NODE_JS,
  Express,
  Mongo_DB,
  Mysql,
  Solidity,
  Truffle,
  Ganache_cli,
} = tecData;

export const projectsData: Array<ProjectData> = [
  {
    id: 1,
    Tec: [
      NEXT_JS,
      React,
      Redux,
      TypeScript,
      SASS,
      Solidity,
      Ganache_cli,
      Truffle,
    ],
    Link: [
      linkData(typeLink.GIT_HUB, "https://github.com/MohsenBg/MyTokenERC20"),
      linkData(typeLink.WEB_SITE, "https://my-token-erc-20.vercel.app/"),
    ],
    about: {
      title: "Loop Token",
      body: "Loop token is a Normal Token and people can Buy some Product in website or make own product and sell it.",
    },
    Image: [
      {
        id: 1,
        ImageSrc: `${path}/p1/1.png`,
      },
      {
        id: 2,
        ImageSrc: `${path}/p1/2.png`,
      },
      {
        id: 3,
        ImageSrc: `${path}/p1/3.png`,
      },
      {
        id: 4,
        ImageSrc: `${path}/p1/4.png`,
      },
      {
        id: 5,
        ImageSrc: `${path}/p1/5.png`,
      },
      {
        id: 6,
        ImageSrc: `${path}/p1/6.png`,
      },
    ],
  },

  {
    id: 2,
    Tec: [NEXT_JS, React, Redux, TypeScript, SASS, JavaScript],
    Link: [
      linkData(typeLink.GIT_HUB, "https://github.com/MohsenBg/EscapeSequences"),
      linkData(typeLink.WEB_SITE, "https://escape-sequences.vercel.app/"),
    ],
    about: {
      title: "escape-sequences",
      body: "it's project for show document and it teach EscapeSequences.",
    },
    Image: [
      {
        id: 1,
        ImageSrc: `${path}/p2/1.png`,
      },
      {
        id: 2,
        ImageSrc: `${path}/p2/2.png`,
      },
      {
        id: 3,
        ImageSrc: `${path}/p2/3.png`,
      },
      {
        id: 4,
        ImageSrc: `${path}/p2/4.png`,
      },
    ],
  },

  {
    id: 3,
    Tec: [NEXT_JS, React, Redux, TypeScript, SASS, NODE_JS, Express, Mongo_DB],
    Link: [
      linkData(typeLink.GIT_HUB, "https://github.com/MohsenBg/Salt"),
      linkData(typeLink.WEB_SITE, "https://salt-chat.vercel.app/"),
    ],
    about: {
      title: "Salt",
      body: "its' power full project for login and signup using email also have specie tec called salt for encrypt your password and hashing no one can find password also owner of dataBase.",
    },
    Image: [
      {
        id: 1,
        ImageSrc: `${path}/p3/1.png`,
      },
      {
        id: 2,
        ImageSrc: `${path}/p3/1.png`,
      },
      {
        id: 3,
        ImageSrc: `${path}/p3/1.png`,
      },
    ],
  },

  {
    id: 4,
    Tec: [NEXT_JS, React, Redux, TypeScript, SASS, NODE_JS, Express, Mongo_DB],
    Link: [
      linkData(typeLink.GIT_HUB, "https://github.com/MohsenBg/MarketPrice"),
      linkData(typeLink.WEB_SITE, "market-price.vercel.app"),
    ],
    about: {
      title: "Mr.fox",
      body: "Mr.fox is a app for showing cryptocurrency coins price",
    },
    Image: [
      {
        id: 1,
        ImageSrc: `${path}/p4/1.png`,
      },
      {
        id: 2,
        ImageSrc: `${path}/p4/2.png`,
      },
      {
        id: 3,
        ImageSrc: `${path}/p4/3.png`,
      },
      {
        id: 4,
        ImageSrc: `${path}/p4/4.png`,
      },
      {
        id: 5,
        ImageSrc: `${path}/p4/5.png`,
      },
    ],
  },

  {
    id: 5,
    Tec: [NEXT_JS, React, Redux, TypeScript, SASS, NODE_JS, Express, Mongo_DB],
    Link: [
      linkData(typeLink.GIT_HUB, "https://github.com/MohsenBg/Snake-js"),
      linkData(typeLink.WEB_SITE, "https://snake-js-mohsenbg.vercel.app/"),
    ],
    about: {
      title: "Snake Game",
      body: "SnakeGame it's game on web you can eat , grow and increase your hight score",
    },
    Image: [
      {
        id: 1,
        ImageSrc: `${path}/p5/1.png`,
      },
      {
        id: 2,
        ImageSrc: `${path}/p5/2.png`,
      },
      {
        id: 3,
        ImageSrc: `${path}/p5/3.png`,
      },
    ],
  },
];
