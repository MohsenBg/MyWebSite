import { IconType } from "react-icons/lib";
import image01 from "../../../Images/Project/ImageSideProject/Image01.png";
import image02 from "../../../Images/Project/ImageSideProject/Image02.png";
import image03 from "../../../Images/Project/ImageSideProject/Image03.png";
import image04 from "../../../Images/Project/ImageSideProject/Image04.png";
import image05 from "../../../Images/Project/ImageSideProject/Image05.png";
import image06 from "../../../Images/Project/ImageSideProject/Image06.png";
import * as GoIcons from "react-icons/go";

interface img {
  id: number;
  imageUrl: string;
  dote: IconType;
}

export const Image: Array<img> = [
  {
    id: 1,
    imageUrl: image01,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 2,
    imageUrl: image02,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 3,
    imageUrl: image03,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 4,
    imageUrl: image04,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 5,
    imageUrl: image05,
    dote: GoIcons.GoPrimitiveDot,
  },
  {
    id: 6,
    imageUrl: image06,
    dote: GoIcons.GoPrimitiveDot,
  },
];
