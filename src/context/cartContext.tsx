import { imageType } from '@/pages/Products';

import reducer from '../reducers/cart_reducer';
import { createContext, useContext, useReducer } from 'react';

// type product = {
//   id: string;
//   createdTime: string;
//   fields: {
//     name: string;
//     price: string;
//     description: string;
//     quantity: number;
//     Size: string[];
//     colors: string[];
//     images: imageType[];
//     featured?: boolean;
//   };
// };
type cartProduct = {
  color: string;
  size: string;
  name: string;
  image: string;
  id: string;
};
type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: cartProduct;
};

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: string;
};

type IncreaseCartItemAmountAction = {
  type: 'INCREASE_CART_ITEM_ACTION';
  payload: number;
};

type DecreaseCartItemAmountAction = {
  type: 'DECREASE_CART_ITEM_ACTION';
  payload: number;
};

type ClearCart = {
  type: 'CLEAR_CART';
};

type cartState = {
  cart: cartProduct[];
};

type Action =
  | RemoveFromCartAction
  | AddToCartAction
  | IncreaseCartItemAmountAction
  | DecreaseCartItemAmountAction
  | ClearCart;

type CartContextValue = cartState & {
  addToCart: (product: cartProduct) => void;
  removeFromCart: (id: string) => void;
  increaseAmount: (amount: number) => void;
  decreaseAmount: (amount: number) => void;
  clearCart: () => void;
};
const CartContext = createContext<CartContextValue | null>(null);
const initialState: cartState = {
  cart: [],
};
const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const ctx: CartContextValue = {
    cart: state.cart,
    addToCart(product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    },
    removeFromCart(id) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    },
    increaseAmount(amount) {
      dispatch({ type: 'INCREASE_CART_ITEM_ACTION', payload: amount });
    },
    decreaseAmount(amount) {
      dispatch({ type: 'DECREASE_CART_ITEM_ACTION', payload: amount });
    },
    clearCart() {
      dispatch({ type: 'CLEAR_CART' });
    },
  };

  return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
};

export default CartProvider;

export function useCartContext() {
  const cartCtx = useContext(CartContext);
  if (cartCtx === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
}
