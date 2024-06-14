import React, { createContext, useState, useContext, useReducer } from 'react';
import reducer from '../reducers/wishlist_reducer';
import { imageType } from '@/pages/Products';

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

type AddToWishlistAction = {
  type: 'ADD_TO_WISHLIST';
  payload: product;
};

type RemoveFromWishlistAction = {
  type: 'REMOVE_FROM_WISHLIST';
  payload: string;
};

type Action = AddToWishlistAction | RemoveFromWishlistAction;

type wishlistState = {
  wishlist: product[];
};

type WishlistContextValue = wishlistState & {
  addToWishlist: (product: product) => void;
  removeFromWishlist: (id: string) => void;
};

let initialState: wishlistState = {
  wishlist: [],
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

const WishlistProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ctx: WishlistContextValue = {
    wishlist: state.wishlist,
    addToWishlist(product) {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    },
    removeFromWishlist(id) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
    },
  };

  return (
    <WishlistContext.Provider value={ctx}>{children}</WishlistContext.Provider>
  );
};

function useWishlist() {
  const wishlistCtx = useContext(WishlistContext);
  if (wishlistCtx === null) {
    throw new Error(
      'useWishlistContext must be used within a WishlistProvider'
    );
  }
  return wishlistCtx;
}

export { WishlistProvider, useWishlist };
