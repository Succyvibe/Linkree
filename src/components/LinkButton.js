import React from "react";

const LinkButton = (props) => {
  //   const { name, title, link } = props;

  return (
    <div>
      <div className="flex flex-col gap-[8px]">
        <a
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 md:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          href={"https://twitter.com/successibekwe1/"}
        >
          Twitter Link
        </a>

        <a
          id="btn__zuri"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 lg:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          href={"https://training.zuri.team/"}
        >
          Zuri Team
        </a>
        <a
          id="books"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 md:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          href={"https://books.zuri.team/"}
          title="This is where you find books about design and coding"
        >
          Zuri Books
        </a>

        <a
          id="book__python"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 md:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          ref_id="SuccyCode"
          href={"https://books.zuri.team/"}
          title="Best place to get the python books to start your  tech career"
        >
          Python Books
        </a>
        <a
          id="pitch"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 md:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          href={"https://background.zuri.team"}
          title="Get all your codes validated at an affordable rate"
        >
          Background Check for Coders
        </a>

        <a
          id="book__design"
          className="bg-[#f4f5f7] hover:bg-gray-400 transition duration-300 md:w-[1152px] h-[76px] py-[24px] px-[32px] rounded-[8px] border border-[#EAECF0] text-gray-900 font-[600] text-center font-semibold"
          target="_blank"
          rel="noreferrer"
          href={"https://books.zuri.team/design-rules"}
          title="Best place to get amazingly free designs rules for your designs"
        >
          Design Books
        </a>
      </div>
    </div>
  );
};

export default LinkButton;
