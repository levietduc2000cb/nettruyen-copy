import React from "react";
import { FaTimes } from "react-icons/fa";

import "./storyhot.scss";

const StoryHot = props => {
  return (
    <div className="story-hot">
      <div className="story-hot-img-wrapper">
        <img
          src="https://st.ntcdntempv3.com/data/comics/90/thanh-khu.jpg"
          alt="img-story"
          className="story-hot-img"
        />
      </div>
      <div className="story-hot-review">
        <div className="story-hot-name">Thánh Khư</div>
        {props.read && (
          <div className="story-hot-chapter">
            <span className="story-hot-chapter-number">Chapter 191</span>
            <span className="story-hot-chapter-time">5 giờ trước</span>
          </div>
        )}
        <div
          className="story-hot-read-continue"
          style={{ fontSize: `${props.delete ? "1.3rem" : "auto"}` }}
        >
          <div>Đọc tiếp Chapter 181</div>
          {props.delete && (
            <div>
              <span>
                <FaTimes />
              </span>
              <span>Xóa</span>
            </div>
          )}
        </div>
        {props.delete && <div></div>}
      </div>
    </div>
  );
};

export default StoryHot;
