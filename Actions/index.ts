export type AddToCartAction = {
  type: 'ADD_TO_CART';
};
export type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
};
export type IncreaseCartItemAmountAction = {
  type: 'INCREASE_CART_ITEM_ACTION';
};
export type DecreaseCartItemAmountAction = {
  type: 'DECREASE_CART_ITEM_ACTION';
};
export type Action =
  | RemoveFromCartAction
  | AddToCartAction
  | IncreaseCartItemAmountAction
  | DecreaseCartItemAmountAction;
