import { Button } from 'antd';
import releaseA from '../assets/releaseB.png';

import { PlusIcon } from '../icons';
import { useState } from 'react';
import AddToWishlistButton from './AddToWishlistButton';
import { AiOutlinePlus } from 'react-icons/ai';

type Product = {
  id: number;
  name: string;
  image?: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  amount: number;
};

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  return (
    <div className=" w-full relative flex flex-col gap-3">
      <img src={releaseA} alt="" className="object-cover block object-center" />
      <div className=" flex items-center justify-between">
        <div className="description">
          <h2 className="text-xl">{product.name}</h2>
          <p className="mt-2 text-lg">{product.price} ($44)</p>
        </div>
        <Button
          type="text"
          className="border flex justify-center text-2xl font-medium items-center rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end "
        >
          <AiOutlinePlus />
        </Button>
        <AddToWishlistButton product={product} />
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
