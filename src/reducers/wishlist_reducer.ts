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

type wishlistState = {
  wishlist: product[];
};

type Action = AddToWishlistAction | RemoveFromWishlistAction;

function wishlist_reducer(state: wishlistState, action: Action) {
  if (action.type === 'ADD_TO_WISHLIST') {
    const product = action.payload;
    // Check if the product already exists in the wishlist
    const existingProduct = state.wishlist.find((p) => p.id === product.id);
    if (!existingProduct) {
      // Product does not exist, add it to the wishlist
      let tempWishlist: product[] = [...state.wishlist, product];
      return { ...state, wishlist: tempWishlist };
    } else {
      // Product already exists, return state unchanged
      return state;
    }
  }
  if (action.type === 'REMOVE_FROM_WISHLIST') {
    const id = action.payload;
    let tempWishlist = state.wishlist.filter((product) => product.id != id);
    return { ...state, wishlist: tempWishlist };
  }

  return state;
}

export default wishlist_reducer;
