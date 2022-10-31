import React from "react";
import picture from "../../src/img/share-icon.png";

const Button = () => {
  return (
    <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] border-dashed border-2 border-gray-300 flex justify-center items-center rounded-full">
      <img id="profile__img" className="" src={picture} alt="BigCo Inc. logo" />
    </div>
  );
};

export default Button;
