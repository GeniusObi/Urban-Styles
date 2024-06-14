import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WishlistProvider } from './context/WishlistContext.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { UserProvider } from './context/userContext.tsx';
import ProductProvider from './context/productContext.tsx';
import FilterProvider from './context/filterContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <UserProvider>
      <ProductProvider>
        <FilterProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </FilterProvider>
      </ProductProvider>
    </UserProvider>
  </MantineProvider>
);
