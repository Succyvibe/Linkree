import React from "react";
import picture from "../../src/img/profile__img.png";

const ProfilePic = (props) => {
  //   const { picture } = props;
  return (
    <div>
      <div className="w-[88px] h-[88px] rounded-full cursor-pointer">
        <img
          id="profile__img"
          className="w-full h-full rounded-full cover"
          src={picture}
          alt="user profile"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
