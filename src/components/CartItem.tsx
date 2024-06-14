import { Button, Card } from 'antd';
import React from 'react';

import { DeleteIcon } from '@/icons';
import AmountButtons from './AmountButtons';
import { imageType } from '@/pages/Products';

type Product = {
  id: string;
  createdTime: string;
  fields: {
    Name: string;

    price: string;
    description: string;
    quantity: number;
    Size: string[];
    colors: string[];
    images: imageType[];
    productReviews?: any;
  };
};
type ProductProps = {
  product: Product;
};
const CartItem = ({ product }: ProductProps) => {
  const { id, fields } = product;
  const { Name, price, quantity, images } = fields;
  const image = images[0];
  const url = image.url;
  return (
    <div className="h-[256px] flex gap-4 items-center ">
      <button type="button">
        <DeleteIcon />
      </button>
      <img
        src={url}
        alt="cartItemImage"
        className="object-cover h-[192px] w-[192px]"
      />
      <div className="grow form-control gap-2 text-[1.5rem]">
        <h3 className="">{Name}</h3>
        <p> {price}</p>
      </div>
      <AmountButtons amount={quantity} />
    </div>
  );
};

export default CartItem;
