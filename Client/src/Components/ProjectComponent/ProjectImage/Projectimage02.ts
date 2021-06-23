import { IconType } from "react-icons/lib";
import * as GoIcons from "react-icons/go";
import Image01 from "../../../Images/Project/IamgeProject02/Image01.webp";
import Image02 from "../../../Images/Project/IamgeProject02/Image02.webp";
import Image03 from "../../../Images/Project/IamgeProject02/Image03.webp";
import Image04 from "../../../Images/Project/IamgeProject02/Image04.webp";

interface Project02 {
  id: number;
  ImageSrc: string;
  dote: IconType;
}

export const ImageProject02: Array<Project02> = [
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
  {
    id: 3,
    ImageSrc: Image03,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 4,
    ImageSrc: Image04,
    dote: GoIcons.GoPrimitiveDot,
  },
];
