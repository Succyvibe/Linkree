import React from "react";
import ZuriImg from "../../src/img/Zuri.png";
import I4G from "../../src/img/I4G.png";

const Footer = () => {
  return (
    <div className="px-4">
      <div className=" container mx-auto md:flex justify-between my-5 py-4 px-10 md:my-10 space-y-2 md:space-y-0 border-t-2 ">
        <div>
          <img src={ZuriImg} alt="slack" />
        </div>

        <div>
          <h3 className="text-gray-500">HNG Internship 9 Frontend Task</h3>
        </div>
        <div>
          <img src={I4G} alt="github logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
