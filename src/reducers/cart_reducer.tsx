type AddToCartAction = {
  type: 'ADD_TO_CART';
};
type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
};
type ClearCartAction = {
  type: 'CLEAR_CART';
};
type ToggleCartAmountAction = {
  type: 'TOGGLE_CART_AMOUNT';
};

type Action =
  | RemoveFromCartAction
  | AddToCartAction
  | ToggleCartAmountAction
  | ClearCartAction;
function cart_reducer(state: object, action: Action) {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
}
export default cart_reducer;
