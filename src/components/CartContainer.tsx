import React from 'react';
import { Product as ProductSchema } from '@/context/WishlistContext';
import { products } from '@/utils/constants';
import CartItem from './CartItem';
let cart = products;

const CartContainer = () => {
  return (
    <div className="form-control gap-6">
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartContainer;
