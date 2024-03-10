import Falist from '../helpers/faqs-list';
import { useState } from 'react';
import { ArrowDown, ArrowUp } from '../icons';
const FaqsList = () => {
  const [active1, setActive1] = useState<boolean>(false);
  return (
    <div>
      {Falist.map((item) => {
        const { id, text } = item;
        return (
          <div className="flex" key={`${id}`}>
            <p className=" ">{`${id}`}</p>
            <p className="ml-5 grow-[3] basis-[90%]  justify-start ">{text}</p>
            <button
              type="button"
              className=""
              onClick={() => setActive1(!active1)}
            >
              {active1 ? <ArrowUp /> : <ArrowDown />}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FaqsList;
