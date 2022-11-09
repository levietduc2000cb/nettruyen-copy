import React from "react";

import "./wrapperbodyhome.scss";
import NewStoryUpdate from "../NewStoryUpdate/NewStoryUpdate";
import SideBarBodyHome from "../SideBarBodyHome/SideBarBodyHome";

const WrapperBodyHome = () => {
  return (
    <div className="wrapper-body-home">
      <div className="wrapper-body-contain">
        <NewStoryUpdate />
        <SideBarBodyHome />
      </div>
    </div>
  );
};

export default WrapperBodyHome;
