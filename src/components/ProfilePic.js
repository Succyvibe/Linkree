import React from "react";

const ProfilePic = (props) => {
  //   const { picture } = props;
  return (
    <img
      style={{ maxHeight: "225px", margin: "45px", borderRadius: "200px" }}
      src={picture}
    />
  );
};

export default ProfilePic;
