import React from "react";
import picture from "../../src/img/succy1.jpeg";

const ProfilePic = (props) => {
  //   const { picture } = props;
  return (
    <div className="w-[88px] h-[88px] rounded-full">
      <img
        id="profile__img"
        className="w-full h-full rounded-full cover"
        src={picture}
        alt="BigCo Inc. logo"
      />
    </div>
  );
};

export default ProfilePic;
