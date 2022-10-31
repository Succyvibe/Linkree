import React from "react";
import ZuriImg from "../../src/img/Zuri.png";
import I4G from "../../src/img/I4G.png";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between mt-20">
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
