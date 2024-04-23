import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  CartPage,
  Contact,
  Error,
  Home,
  Products,
  RegisterPage,
  SharedLayout,
  SingleProduct,
  Wishlist,
  Login,
  Checkout,
} from './pages';
import About from './pages/About';
// LOADERS
import { loader as productsLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
// ACTIONS
// import { action as registerAction } from './pages/RegisterPage';
import { action as loginAction } from './pages/Login';
import { action as cartPageAction } from './pages/CartPage';

import { ErrorElement } from './components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'cart',
        element: <CartPage />,
        action: cartPageAction,
      },
    ],
  },

  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <Error />,
    // action: registerAction,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

    // <BrowserRouter >
    //   <Routes>
    //     <Route path="/" element={<SharedLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="faqs" element={<Faqs />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="contact" element={<Contact_Us />} />
    //       <Route path="products" element={<Products />} />
    //       <Route path="products/:id" element={<SingleProduct />} />
    //       <Route path="wishlist" element={<Wishlist />} />
    //       <Route path="cart" element={<CartPage />} />
    //       <Route path="contact us" element={<Contact_Us />} />
    //       <Route path="*" element={<Error />} />
    //     </Route>
    //     <Route path="register" element={<RegisterPage />} />
    //     <Route path="login" element={<Login />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
