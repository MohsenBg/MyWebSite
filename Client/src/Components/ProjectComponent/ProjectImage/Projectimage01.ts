import { IconType } from "react-icons/lib";
import * as GoIcons from "react-icons/go";
import Image01 from "../../../Images/Project/IamgeProject01/VeggieBite.webp";
import Image02 from "../../../Images/Project/IamgeProject01/VeggieBite_mobile.webp";

interface Project01 {
  id: number;
  ImageSrc: string;
  dote: IconType;
}

export const ImageProject01: Array<Project01> = [
  {
    id: 1,
    ImageSrc: Image01,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 2,
    ImageSrc: Image02,
    dote: GoIcons.GoPrimitiveDot,
  },
];
