import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaEye, FaComment } from "react-icons/fa";

import "./storyupdate.scss";

const StoryUpdate = () => {
  return (
    <div className="story-update">
      <div className="story-update-img-wrapper">
        <img
          src="https://st.ntcdntempv3.com/data/comics/253/long-vuong-truyen-thuyet.jpg"
          alt="img-story-title"
          className="story-update-img"
        />
        <div className="story-update-img-bottom">
          <div className="story-update-view">
            <span>
              <FaEye />
            </span>
            <span>245K</span>
          </div>
          <div className="story-update-view">
            <span>
              <FaComment />
            </span>
            <span>245K</span>
          </div>
          <div className="story-update-view">
            <span>
              <AiFillHeart />
            </span>
            <span>245K</span>
          </div>
        </div>
      </div>
      <div className="story-update-name">
        <span>Long vương truyền thuyết</span>
      </div>
      <div className="story-update-chapters">
        <div className="story-update-chapter">
          <span className="story-update-chapter-number">Chapter 32</span>
          <span className="story-update-chapter-time">17 phút trước</span>
        </div>
        <div className="story-update-chapter">
          <span className="story-update-chapter-number">Chapter 31</span>
          <span className="story-update-chapter-time">17 phút trước</span>
        </div>
        <div className="story-update-chapter">
          <span className="story-update-chapter-number">Chapter 30</span>
          <span className="story-update-chapter-time">17 phút trước</span>
        </div>
      </div>
    </div>
  );
};

export default StoryUpdate;
