import React from "react";

const LinkButton = (props) => {
  const { name, title, link } = props;

  return (
    <div>
      <h3 className="text-center">{title}</h3>
      <div className="flex flex-col gap-4">
        <a
          className="bg-[#f4f5f7] w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={link}
        >
          {name}
        </a>
        <a
          className="bg-[#f4f5f7] w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={link}
        >
          {name}
        </a>
        <a
          className="bg-[#f4f5f7] w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={link}
        >
          {name}
        </a>
        <a
          className="bg-[#f4f5f7] w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={link}
        >
          {name}
        </a>
        <a
          className="bg-[#f4f5f7] w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={link}
        >
          {name}
        </a>
      </div>
    </div>
  );
};

export default LinkButton;
