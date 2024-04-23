import { createContext } from 'react';

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

const CartContext = createContext<null>(null);

export const CartProvider = ({ children }: React.PropsWithChildren) => {
  return <CartContext.Provider value={null}>{children}</CartContext.Provider>;
};
