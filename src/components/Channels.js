import React from "react";
import picture from "../../src/img/slack.png";
import github from "../../src/img/github.png";

const Channels = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-10">
        <div>
          <img src={picture} alt="slack" />
        </div>
        <a
          href="https://github.com/Succyvibe/Linkree"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
      </div>
    </div>
  );
};

export default Channels;
