import React from "react";
// import PropTypes from "prop-types";

import "./recommendedstory.scss";

import CaroseStories from "../CaroseStories/CaroseStories";

import StoryWrapper from "../StoryWrapper/StoryWrapper";

const RecommendedStory = props => {
  return (
    <div className="recommended-story-wrapper">
      <StoryWrapper title="Truyện đề cử">
        <CaroseStories></CaroseStories>
      </StoryWrapper>
    </div>
  );
};

// RecommendedStory.propTypes = {};

export default RecommendedStory;
