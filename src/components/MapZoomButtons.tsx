import { Button } from 'antd';
import React from 'react';
import { ZoomInIcon, ZoomOutIcon } from '../icons';

const MapZoomButtons = () => {
  return (
    <div className="join gap-2  absolute bottom-14 -right-2 rotate-90 bg-[#FFF4F4]">
      <button
        type="button"
        className=" btn rounded-none bg-[#FFF4F4]  p-3 w-[48px] h-[48px] focus:shadow-lg"
      >
        <ZoomInIcon />
      </button>
      <div id="divider" className="border-[#CCCCCC] border border-b-8"></div>
      <div className="zoom-out rotate-90">
        <button
          type="button"
          className=" btn rounded-none text-center bg-[#FFF4F4] p-3 w-[48px] h-[48px] grid place-items-center focus:shadow-md "
        >
          <ZoomOutIcon />
        </button>
      </div>
    </div>
  );
};

export default MapZoomButtons;
