import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Icons {
  id: number;
  Name: string;
  iconName: IconType;
  link: string;
}

export const IconsSocial: Array<Icons> = [
  {
    id: 1,
    Name: "GitHub",
    iconName: AiIcons.AiFillGithub,
    link: "https://github.com/MohsenBg",
  },
  {
    id: 2,
    Name: "Instagram",
    iconName: AiIcons.AiFillInstagram,
    link: "https://www.instagram.com/invites/contact/?i=1q59sni4eyvtf&utm_content=iqxu2jw",
  },
  {
    id: 3,
    Name: "Telegram",
    iconName: FaIcons.FaTelegram,
    link: "https://t.me/Mohsenbg1",
  },
  {
    id: 4,
    Name: "Skype",
    iconName: AiIcons.AiFillSkype,
    link: "https://join.skype.com/invite/M6l6u1R7Eph6",
  },
  {
    id: 5,
    Name: "Facebook",
    iconName: FaIcons.FaFacebook,
    link: "https://www.facebook.com/mohsen.bagheri.750546",
  },
  {
    id: 6,
    Name: "StackOverflow",
    iconName: FaIcons.FaStackOverflow,
    link: "https://stackoverflow.com/users/15462691/mohsen-bg",
  },
];
