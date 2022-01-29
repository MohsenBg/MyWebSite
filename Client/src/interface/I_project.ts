import { IconType } from "react-icons/lib";
interface TecType {
  id: number;
  name: string;
  icon: IconType | null;
}

export interface TecData {
  Html5: TecType;
  CSS3: TecType;
  SASS: TecType;
  JavaScript: TecType;
  TypeScript: TecType;
  NEXT_JS: TecType;
  React: TecType;
  Redux: TecType;
  NODE_JS: TecType;
  Express: TecType;
  Mongo_DB: TecType;
  Mysql: TecType;
  Solidity: TecType;
  Truffle: TecType;
  Ganache_cli: TecType;
}

interface ImageType {
  id: number;
  ImageSrc: string;
}

interface LinkType {
  id: number;
  name: string;
  icon: IconType;
  link: string;
}

export enum typeLink {
  GIT_HUB = "GIT_HUB",
  WEB_SITE = "WEB_SITE",
}

export interface ProjectData {
  id: number;
  Tec: Array<TecType>;
  about: { title: string; body: string };
  Link: Array<LinkType | undefined>;
  Image: Array<ImageType>;
}
