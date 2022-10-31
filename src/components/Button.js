import React from "react";
import picture from "../../src/img/share-icon.png";
import dotIcon from "../../src/img/dot-Icon.png";

const Button = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]  hover:bg-gray-100 border-dashed border-2 border-gray-300 md:flex justify-center items-center rounded-full hidden ">
          <img id="profile__img" className="" src={picture} alt="share icon" />
        </div>
      </div>
      <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] border-dashed border-2 border-gray-300 flex justify-center items-center rounded-full md:hidden">
        <img id="profile__img" className="" src={dotIcon} alt="dot icon" />
      </div>
    </div>
  );
};

export default Button;
