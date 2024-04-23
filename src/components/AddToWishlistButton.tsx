// import { useWishlist } from '@/context/WishlistContext';
// import { Button } from 'antd';
// import React, { useContext, useState } from 'react';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

// type Product = {
//   id: number;
//   image?: string;
//   name: string;
//   price: string;
//   description: string;
//   colors: string[];
//   sizes: string[];
//   amount: number;
// };

// type Props = {
//   product: Product;
// };

// const AddToWishlistButton: React.FC<Props> = ({ product }) => {
//   const { addToWishlist, wishlist } = useWishlist();
//   const [isAdded, setIsAdded] = useState<boolean>(wishlist.includes(product));

//   const addProductToWishlist = () => {
//     addToWishlist(product);
//     setIsAdded(!isAdded);
//   };

//   return (
//     <>
//       {isAdded ? (
//         <button
//           type="button"
//           className="focus:outline-none border rounded-none  flex items-center justify-center  border-[#1F0404]  absolute top-8 right-4 lg:right-6  p-2 w-10 h-10 "
//         >
//           <AiOutlineHeart className="text-black text-2xl" />
//         </button>
//       ) : (
//         <button
//           type="button"
//           onClick={addProductToWishlist}
//           className="focus:outline-none border rounded-none  flex items-center justify-center  border-[#1F0404]  absolute top-8 right-4 lg:right-6  p-2 w-10 h-10 "
//         >
//           <AiFillHeart className="text-black text-2xl" />
//         </button>
//       )}
//     </>
//   );
// };

// export default AddToWishlistButton;

import { useWishlist } from '@/context/WishlistContext';

import React, { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

type Product = {
  id: number;
  image?: string;
  name: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  amount: number;
};

type Props = {
  product: Product;
};

const AddToWishlistButton: React.FC<Props> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    setIsAdded(wishlist.includes(product));
    console.log('wishlist', wishlist);
  }, [wishlist, product]);

  const addProductToWishlist = () => {
    return addToWishlist(product);
  };

  const removeProductFromWishlist = () => {
    return removeFromWishlist(product);
  };

  return (
    <>
      {isAdded ? (
        <button
          type="button"
          className="focus:outline-none border rounded-none text-2xl text-black flex items-center justify-center  border-[#1F0404]  absolute top-8 right-4 lg:right-6  p-2 w-10 h-10 "
          onClick={removeProductFromWishlist}
        >
          <AiFillHeart />
        </button>
      ) : (
        <button
          type="button"
          className="focus:outline-none border rounded-none text-2xl flex items-center justify-center  border-[#1F0404]  absolute top-8 right-4 lg:right-6  p-2 w-10 h-10 "
          onClick={addProductToWishlist}
        >
          <AiOutlineHeart />
        </button>
      )}
    </>
  );
};

export default AddToWishlistButton;
