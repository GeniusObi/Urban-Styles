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

type searchState = {
  searchedProducts: product[];
  search: string;
};

type LoadSearchProductsAction = {
  type: 'LOAD_SEARCH_PRODUCTS';
  payload: product[];
};

type UpdateSearchProductsAction = {
  type: 'UPDATE_SEARCH_PRODUCTS';
  payload: string;
};
type SearchProductsAction = {
  type: 'SEARCH_PRODUCTS';
  payload: string;
};
type Action =
  | LoadSearchProductsAction
  | SearchProductsAction
  | UpdateSearchProductsAction;

function search_reducer(state: searchState, action: Action) {
  if (action.type === 'LOAD_SEARCH_PRODUCTS') {
    return { ...state, searchedProducts: [...action.payload] };
  }
  if (action.type === 'UPDATE_SEARCH_PRODUCTS') {
    return { ...state, search: action.payload };
  }
  if (action.type === 'SEARCH_PRODUCTS') {
    const searchValue = state.search;
    let tempProducts: product[] = [...state.searchedProducts];
    if (searchValue) {
      tempProducts = tempProducts.filter((product) =>
        product.fields.name.includes(searchValue)
      );
    }
    return { ...state, searchedProducts: tempProducts };
  }
  throw new Error(`No action matches ${action}`);
}

export default search_reducer;
