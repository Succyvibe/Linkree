import React from "react";

const TextBox = (props) => {
  const { twitterUserName, slackUserName } = props;

  return (
    <div className="my-6 text-center">
      <h1 className="text-xl font-semibold text-gray-900" id="twitter">
        {twitterUserName}
      </h1>
      <p id="slack" className="hidden">
        {slackUserName}
      </p>
    </div>
  );
};

export default TextBox;
