import { imageType } from '@/pages/Products';
import { productFetch } from '@/utils/Fetch';
import { createContext, useContext, useEffect, useState } from 'react';

type AddToCartAction = {
  type: 'ADD_TO_CART';
};
type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
};
type ToggleCartAmountAction = {
  type: 'TOGGLE_CART_AMOUNT';
};
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
type Action = RemoveFromCartAction | AddToCartAction | ToggleCartAmountAction;

type ProductsState = {
  products: product[];
  newReleases: product[];
};
type ContextState = ProductsState & {
  isLoading: boolean;
  search?: string;
};

const ProductContext = createContext<ContextState | null>(null);

export default function ProductProvider({ children }: React.PropsWithChildren) {
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await productFetch('/products', {
          method: 'get',
        });
        const data = await response.data.records;
        setProducts(data);

        console.log(data);

        // console.log(records[0].fields.images[0].url);
      } catch (error: any) {
        console.log(error?.response);
      }
    };
    getProducts();
  }, []);
  let newReleases: product[] = products.filter(
    (product) => product.fields.featured === true
  );
  let ctx: ContextState = { isLoading: false, products, newReleases };
  return (
    <ProductContext.Provider value={ctx}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  const productsCtx = useContext(ProductContext);
  if (productsCtx === null) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return productsCtx;
}
