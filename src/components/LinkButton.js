import React from "react";

const LinkButton = (props) => {
  //   const { name, title, link } = props;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <a
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://twitter.com/successibekwe1/"}
        >
          Twitter Link
        </a>

        <a
          id="btn__zuri"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://training.zuri.team/"}
        >
          Zuri Team
        </a>
        <a
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://books.zuri.team/"}
        >
          Zuri Books
        </a>
        <a
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"http://books.zuri.team"}
        >
          Zuri Books
        </a>
        <a
          id="book__python"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://books.zuri.team/"}
        >
          Python Books
        </a>
        <a
          id="pitch"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://background.zuri.team"}
        >
          Background Check for Coders
        </a>

        <a
          id="book__design"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 w-full py-[24px] px-[32px] rounded-lg text-gray-900 text-[18px] text-center font-semibold"
          href={"https://books.zuri.team/design-rules"}
        >
          Design Books
        </a>
      </div>
    </div>
  );
};

export default LinkButton;