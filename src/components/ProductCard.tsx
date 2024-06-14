import { Button } from 'antd';
import releaseA from '../assets/releaseB.png';

import { PlusIcon } from '../icons';
import { useState } from 'react';
import AddToWishlistButton from './AddToWishlistButton';
import { AiOutlinePlus } from 'react-icons/ai';
import { imageType } from '@/pages/Products';

type Product = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    price: string;
    description: string;
    quantity: number;
    Size: string[];
    colors: string[];
    images: imageType[];
    productReviews?: any;
  };
};

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  const { id, fields } = product;
  const { name, price, images } = fields;
  const image = images[0];
  const url = image.url;
  return (
    // Todo: Check the link element wrapping this component ,
    // it's the reason the paragraph element on hover has a light blue text color.
    // So correct that.

    <div className=" w-full relative h-full flex flex-col gap-3">
      <img
        src={url}
        alt="Urban Styles"
        className="object-cover block  object-center"
      />
      <div className=" flex items-center justify-between">
        <div className="description">
          <h2 className="text-xl hover:text-black">{name}</h2>
          <p className="mt-2 text-lg ">{price} or ($44)</p>
        </div>
        <Button
          type="text"
          className="border flex justify-center text-2xl font-medium items-center rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end "
        >
          <AiOutlinePlus />
        </Button>
        {/* <AddToWishlistButton product={product} /> */}
      </div>
    </div>
  );
};

export default ProductCard;
//  <button
//    type="button"
//    className={`border rounded-none   border-[#1F0404]  absolute top-8 right-4 lg:right-6  p-2 w-10 h-10 ${
//      wishlist ? 'bg-[#1F0404] text-white' : null
//    }`}
//    onClick={() => setWishList(!wishlist)}
//  >
//    <HeartIcon />
//  </button>;
