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
  {
    name: 'Mike Ballack',
    image: avatarD,
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
  {
    name: 'Mike Ballack',
    image: avatarD,
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
  id: number;
  name: string;
  image?: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  amount: number;
};
export let products: ProductsData[];
products = [
  {
    id: 1,
    name: 'Slim V Neck Limited Pique Polo',
    image: slimOne,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 10,
    sizes: ['XL', 'L'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
  {
    id: 2,
    name: 'Slim V Rouned Neck',
    image: slimTwo,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 3,
    sizes: ['XL', 'L', 'M'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
  {
    id: 3,
    name: 'BigJOe Hoodie',
    image: slimThree,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 3,
    sizes: ['XL', 'L', 'M'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
  {
    id: 4,
    name: 'Lakers Vest',
    image: slimFour,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 3,
    sizes: ['XL', 'L', 'M'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
  {
    id: 5,
    name: 'Nike Polo',
    image: slimFive,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 3,
    sizes: ['XL', 'L', 'M'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
  {
    id: 6,
    name: 'Addidas Big Hoodie',
    image: slimSix,
    price: 'N40,000 ($20)',
    description: 'wondeful piece',
    amount: 3,
    sizes: ['XL', 'L', 'M'],
    colors: ['bg-blue-300', 'bg-red-600', 'bg-black'],
  },
];
export const products_url = '/.netlify/functions/products';
