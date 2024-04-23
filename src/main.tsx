import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WishlistProvider } from './context/WishlistContext.tsx';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </MantineProvider>
);
