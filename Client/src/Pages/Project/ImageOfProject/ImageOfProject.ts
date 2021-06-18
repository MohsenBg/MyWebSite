import image01 from "../../../Images/Project/ImageSideProject/Image01.png";
import image02 from "../../../Images/Project/ImageSideProject/Image02.png";
import image03 from "../../../Images/Project/ImageSideProject/Image03.png";
import image04 from "../../../Images/Project/ImageSideProject/Image04.png";
import image05 from "../../../Images/Project/ImageSideProject/Image05.png";
import image06 from "../../../Images/Project/ImageSideProject/Image06.png";

interface img {
  id: number;
  imageUrl: string;
}

export const Image: Array<img> = [
  {
    id: 1,
    imageUrl: image01,
  },
  {
    id: 2,
    imageUrl: image02,
  },
  {
    id: 3,
    imageUrl: image03,
  },
  {
    id: 4,
    imageUrl: image04,
  },
  {
    id: 5,
    imageUrl: image05,
  },
  {
    id: 6,
    imageUrl: image06,
  },
];
