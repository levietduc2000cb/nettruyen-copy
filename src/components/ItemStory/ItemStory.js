import React from "react";
// import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";

import "./itemstory.scss";

const ItemStory = props => {
  return (
    <div className="item-story-contain">
      <img
        src="https://st.ntcdntempv3.com/data/comics/230/tien-ton-lac-vo-cuc.jpg"
        alt="image_story"
      ></img>
      <div className="item-story-review">
        <div className="item-story-review-title">Tiên Tôn Lạc Vô Cực</div>
        <div className="item-story-review-des">
          <div className="item-story-review-des-chapter">
            <span>Chapter </span>
            <span>168</span>
          </div>
          <div className="item-story-review-des-time">
            <span>
              <FaRegClock />
            </span>
            <span>12 giờ trước</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ItemStory.propTypes = {

// };

export default ItemStory;
