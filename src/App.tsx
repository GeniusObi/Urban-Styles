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
  SearchPage,
} from './pages';
import About from './pages/About';
import { action as loginAction } from './pages/Login';
import { action as cartPageAction } from './pages/CartPage';

import { ErrorElement } from './components';
import PrivateRoute from './pages/PrivateRoute';
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
        path: '/products',
        element: <Products />,

        errorElement: <ErrorElement />,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
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
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: 'search/:id',
        element: <SearchPage />,
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
