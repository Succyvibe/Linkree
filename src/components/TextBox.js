import React from "react";

const TextBox = (props) => {
  const { twitterUserName, slackUserName } = props;

  return (
    <div className="my-6 text-center">
      <a
        className="text-xl font-semibold text-gray-900"
        id="twitter"
        target="_blank"
        rel="noreferrer"
        href={"https://twitter.com/successibekwe1/"}
      >
        {twitterUserName}
      </a>

      <p id="slack" className="hidden">
        {slackUserName}
      </p>
    </div>
  );
};

export default TextBox;
