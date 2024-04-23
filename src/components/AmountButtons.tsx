import { Button } from 'antd';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
type AmountButtonsProps = {
  amount: number;
};
const AmountButtons = ({ amount }: AmountButtonsProps) => {
  return (
    <div className="form-control gap-4">
      <Button
        type="text"
        className="border flex justify-center text-2xl font-medium items-center rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end "
      >
        <AiOutlinePlus />
      </Button>
      <p className="text-[1.25rem] text-center">{amount}</p>
      <Button
        type="text"
        className="border flex justify-center text-2xl font-medium items-center rounded-none border-[#1F0404] bg-[#FFF4F4] p-3 w-[48px] h-[48px] self-end "
      >
        <AiOutlineMinus />
      </Button>
    </div>
  );
};

export default AmountButtons;
