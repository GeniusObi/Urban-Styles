import { createContext } from 'react';
import { Product as ProductType } from '@/context/WishlistContext';
type AddToCartAction = {
  type: 'ADD_TO_CART';
};
type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
};
type ToggleCartAmountAction = {
  type: 'TOGGLE_CART_AMOUNT';
};

type Action = RemoveFromCartAction | AddToCartAction | ToggleCartAmountAction;
type ContextState = {
  isLoading: boolean;
  products: ProductType[];
};

const ProductContext = createContext<null>(null);

export const ProductProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ProductContext.Provider value={null}>{children}</ProductContext.Provider>
  );
};
