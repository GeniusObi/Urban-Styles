import { imageType } from '@/pages/Products';
import {
  FormEvent,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { useProductContext } from './productContext';
import reducer from '../reducers/filter_reducer';

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

type LoadFilteredProducts = {
  type: 'LOAD_FILTERED_PRODUCTS';
  payload: product[];
};

type SortFilteredProducts = {
  type: 'SORT_FILTERED_PRODUCTS';
  payload: {};
};
type filterState = {
  products: product[];
  filteredProducts: product[];
  sort: string;
};

type contextValue = {
  updateSort: (e: FormEvent<HTMLSelectElement>) => void;
  products: product[];
  filteredProducts: product[];
};

let initialState: filterState = {
  filteredProducts: [],
  sort: 'HOODIE',
  products: [],
};

const FilterContext = createContext<contextValue | null>(null);

type Action = LoadFilteredProducts | SortFilteredProducts;

export default function FilterProvider({ children }: React.PropsWithChildren) {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'LOAD_FILTERED_PRODUCTS', payload: products });
  }, [products]);

  const ctx: contextValue = {
    filteredProducts: state.filteredProducts,
    products: state.products,
    updateSort(e) {
      let value = e.target.value;
      dispatch({ type: 'SORT_FILTERED_PRODUCTS', payload: value });
    },
  };
  return (
    <FilterContext.Provider value={ctx}>{children}</FilterContext.Provider>
  );
}

export function useFilterContext() {
  const filterCtx = useContext(FilterContext);
  if (filterCtx === null) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return filterCtx;
}
