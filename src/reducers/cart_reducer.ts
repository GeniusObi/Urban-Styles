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
  | AddToCartAction
  | RemoveFromCartAction
  | IncreaseCartItemAmountAction
  | DecreaseCartItemAmountAction
  | ClearCart;

function cart_reducer(state: cartState, action: Action) {
  if (action.type === 'ADD_TO_CART') {
    return { ...state };
  }
  throw new Error(`No action matches ${action.type}`);
}

export default cart_reducer;
