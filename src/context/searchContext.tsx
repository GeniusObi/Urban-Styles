import { imageType } from '@/pages/Products';
import React, { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react';
import reducer from '../reducers/search_reducer';
import { useFilterContext } from './filterContext';
import { useProductContext } from './productContext';
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

type contextValue = {
  searchedProducts: product[];
};
const SearchContext = createContext<contextValue | null>(null);

const initialState: searchState = {
  searchedProducts: [],
  search: '',
};

export default function SearchProvider({ children }: React.PropsWithChildren) {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'LOAD_SEARCH_PRODUCTS', payload: products });
  }, [products]);

  const ctx: contextValue = {
    searchedProducts: state.searchedProducts,
  };
  return (
    <SearchContext.Provider value={ctx}>{children}</SearchContext.Provider>
  );
}

export function useSearchContext() {
  const searchCtx = useContext(SearchContext);
  if (searchCtx === null) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return searchCtx;
}
