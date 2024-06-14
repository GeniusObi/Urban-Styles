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
type filterState = {
  products: product[];
  filteredProducts: product[];
  sort: string;
};
type SortFilteredProducts = {
  type: 'SORT_FILTERED_PRODUCTS';
  payload: {};
};
type LoadFilteredProducts = {
  type: 'LOAD_FILTERED_PRODUCTS';
  payload: product[];
};
type SearchProductsAction = {
  type: 'SEARCH_PRODUCTS';
};

type Action =
  | SortFilteredProducts
  | LoadFilteredProducts
  | SearchProductsAction;
function filter_reducer(state: filterState, action: Action) {
  if (action.type === 'LOAD_FILTERED_PRODUCTS') {
    return {
      ...state,
      filteredProducts: [...action.payload],
      products: [...action.payload],
    };
  }

  // if (action.type === 'SORT_FILTERED_PRODUCTSS') {
  //   const { sort } = action.payload;
  //   const { filteredProducts } = state;
  //   let tempProducts = [];

  //   if (sort === 'A-Z') {
  //     tempProducts = filteredProducts.sort((a, b) => {
  //       return a.name.localeCompare(b.name);
  //     });
  //   }
  //   if (sort === 'Z-A') {
  //     tempProducts = filteredProducts.sort((a, b) => {
  //       return b.name.localeCompare(a.name);
  //     });
  //   }

  throw new Error(`No action matches ${action.type}`);
}

export default filter_reducer;
