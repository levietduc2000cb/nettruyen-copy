import React from "react";

import "./newstoryupdate.scss";
import StoryWrapper from "../StoryWrapper/StoryWrapper";
import StoryUpdate from "./StoryUpdate/StoryUpdate";
import Pagination from "../Pagination/Pagination";

const NewStoryUpdate = () => {
  return (
    <div className="new-story-update">
      <StoryWrapper title="Truyện mới cập nhật">
        <div className="new-story-update-list">
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
          <StoryUpdate />
        </div>
        <Pagination totalPage={500} />
      </StoryWrapper>
    </div>
  );
};

export default NewStoryUpdate;
