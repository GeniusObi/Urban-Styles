// type ProductCardProps = {
//   image: string;
//   name: string;
//   price: number;
// };
import { Button } from 'antd';
import releaseA from '../assets/releaseB.png';

import { HeartIcon, PlusIcon } from '../icons';
import { useState } from 'react';
const ProductCard = () => {
  const [wishlist, setWishList] = useState<boolean>(false);
  return (
    <div className=" w-full lg:w-[380px] relative flex flex-col gap-3">
      <img src={releaseA} alt="" className="object-fit" />
      <div className=" flex items-center justify-between">
        <div className="description">
          <h2 className="card-title">Slim V Neck Limited Pique Polo</h2>
          <p className="mt-2">N40, 000 ($44)</p>
        </div>
        <Button
          type="text"
          className="border flex justify-center items-center rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end "
        >
          <PlusIcon />
        </Button>
        <button
          type="button"
          className={`border rounded-none   border-[#1F0404]  absolute top-8 right-8  p-2 w-10 h-10 ${
            wishlist ? 'bg-[#1F0404] text-white' : null
          }`}
          onClick={() => setWishList(!wishlist)}
        >
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
