import React from "react";
import PropTypes from "prop-types";
import { AiOutlineRight } from "react-icons/ai";

import "./storywrapper.scss";

const StoryWrapper = props => {
  const { title, children } = props;
  return (
    <div className="story-wrapper">
      <div className="story-contain">
        <h1 className="story-contain-title">{title}</h1>
        <AiOutlineRight className="right-icon" />
      </div>
      <div>{children}</div>
    </div>
  );
};

StoryWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default StoryWrapper;
