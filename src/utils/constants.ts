import imageA from '../assets/imageA.png';
import imageC from '../assets/imagec.png';
import avatarA from '../assets/Avatar-one.png';
import avatarB from '../assets/Avatar-two.png';
import avatarC from '../assets/Avatar-three.png';
import avatarD from '../assets/Avatar-four.png';

import slimOne from '../assets/slimVone.png';
import slimTwo from '../assets/slimVtwo.png';
import slimThree from '../assets/slimVthree.png';
import slimFour from '../assets/slimVfour.png';
import slimFive from '../assets/slimVfive.png';
import slimSix from '../assets/slimVsix.png';

export let images: Array<string>;
images = [imageA, imageC];
type reviewsData = {
  name: string;
  image: string;
  location: string;
  description: string;
};
export let reviews: reviewsData[];
reviews = [
  {
    name: 'Olayode Ajibola',
    image: avatarA,
    location: 'Lagos,Nigeria',
    description:
      "Their unique approach to street wear is refreshing and i'm hooked.The reverse Stitch Hoodie I got is my new favorite cold-weather companion",
  },
  {
    name: ' Coco Jones',
    image: avatarB,
    location: 'Lagos,Nigeria',
    description:
      "Their unique approach to street wear is refreshing and i'm hooked.The reverse Stitch Hoodie I got is my new favorite cold-weather companion",
  },
  {
    name: 'Balikis kohinoor',
    image: avatarC,
    location: 'Lagos,Nigeria',
    description:
      "Their unique approach to street wear is refreshing and i'm hooked.The reverse Stitch Hoodie I got is my new favorite cold-weather companion",
  },
  {
    name: 'Mike Ballack',
    image: avatarD,
    location: 'Lagos,Nigeria',
    description:
      "Their unique approach to street wear is refreshing and i'm hooked.The reverse Stitch Hoodie I got is my new favorite cold-weather companion",
  },
];
type ProductsData = {
  name: string;
  image: string;
  price: string;
};
export let products: ProductsData[];
products = [
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimOne,
    price: 'N40,000 ($20)',
  },
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimTwo,
    price: 'N40,000 ($20)',
  },
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimThree,
    price: 'N40,000 ($20)',
  },
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimFour,
    price: 'N40,000 ($20)',
  },
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimFive,
    price: 'N40,000 ($20)',
  },
  {
    name: 'Slim V Neck Limited Pique Polo',
    image: slimSix,
    price: 'N40,000 ($20)',
  },
];
export const products_url = '/.netlify/functions/products';
