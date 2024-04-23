import { Button, Card } from 'antd';
import React from 'react';
import { Product } from '@/context/WishlistContext';
import { DeleteIcon } from '@/icons';
import AmountButtons from './AmountButtons';
type ProductProps = {
  product: Product;
};
const CartItem = ({ product }: ProductProps) => {
  const { name, id, amount, image, price } = product;
  return (
    <div className="h-[256px] flex gap-4 items-center ">
      <button type="button">
        <DeleteIcon />
      </button>
      <img
        src={image}
        alt="cartItemImage"
        className="object-cover h-[192px] w-[192px]"
      />
      <div className="grow form-control gap-2 text-[1.5rem]">
        <h3 className="">{name}</h3>
        <p> {price}</p>
      </div>
      <AmountButtons amount={amount} />
    </div>
  );
};

export default CartItem;
