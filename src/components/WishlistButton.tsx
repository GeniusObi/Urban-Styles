// Assuming you have a state to track if a product is in the wishlist or not
// Let's say `isInWishlist` is a boolean that is true if the product is in the wishlist

import { imageType } from '@/pages/Products';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type product = {
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
    featured?: boolean;
  };
};
type WishlistButtonProps = {
  product: product;
  isInWishlist: boolean;
  addToWishlist: (product: any) => void;
  removeFromWishlist: (id: string) => void;
};
// Wishlist Button Component
const WishlistButton = ({
  product,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
}: WishlistButtonProps) => {
  // Function to toggle product in wishlist
  const toggleWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      type="button"
      className={`border rounded-none border-[#1F0404] flex items-center justify-center text-2xl absolute top-8 right-6 p-2 w-10 h-10 ${
        isInWishlist ? ' fill-black' : 'fill-white'
      }`}
      onClick={toggleWishlist}
    >
      {isInWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
};

export default WishlistButton;

// Usage example (assuming you have the necessary state and function in your parent component)
