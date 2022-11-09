import React from "react";
import PropTypes from "prop-types";

import "./storytopwrapper.scss";

const StoryTopWrapper = props => {
  const { children } = props;

  return (
    <div className="story-top-wrapper">
      <div className="story-top-title">
        <div className="active">Top Tháng</div>
        <div>Top Tuần</div>
        <div>Top Ngày</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

StoryTopWrapper.propTypes = {
  children: PropTypes.node,
};

export default StoryTopWrapper;
