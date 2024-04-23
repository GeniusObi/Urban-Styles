import React, { createContext, useState, useContext } from 'react';

export type Product = {
  id: number;
  name: string;
  image?: string;
  price: string;
  description: string;
  colors: string[];
  sizes: string[];
  amount: number;
};

type WishlistContextType = {
  wishlist: Product[];
  addToWishlist: (product: Product) => Product[];
  removeFromWishlist: (product: Product) => Product[];
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

const WishlistProvider = ({ children }: React.PropsWithChildren) => {
  // const [wishlist, setWishlist] = useState<Product[]>([]);
  let wishlist: Product[] = [];
  const addToWishlist = (product: Product) => {
    wishlist.push(product);
    console.log('item added to wishlist');
    console.log(wishlist);
    return wishlist;
  };
  const removeFromWishlist = (product: Product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);
    wishlist = newWishlist;
    console.log('item removed from wishlist');
    console.log(wishlist);
    return wishlist;
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// function useWishlist(): WishlistContextType {
//   const context = useContext(WishlistContext);
//   if (context === undefined) {
//     throw new Error('context cannot be undefined');
//   }
//   return context;
// }
function useWishlist(): WishlistContextType {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('context cannot be undefined');
  }
  return context;
}

export { WishlistProvider, useWishlist };
