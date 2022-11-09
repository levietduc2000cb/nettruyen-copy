import React from "react";
import PropTypes from "prop-types";
import { ImEye } from "react-icons/im";

import "./tppstoryandperson.scss";

const TopStoryAndPerson = props => {
  const { person, name, rankNumber } = props;

  const numberRank = {
    1: "numberOneColor",
    2: "numberTwoColor",
    3: "numberThreeColor",
  };

  return (
    <div className="top-rank">
      <div
        className={`top-rank-number ${
          rankNumber <= 3 ? numberRank[rankNumber] : "numberOtherColor"
        }`}
      >{`0${rankNumber}`}</div>
      <div className="top-rank-img-wrapper">
        <img
          src="https://st.ntcdntempv3.com/data/comics/32/vo-luyen-dinh-phong.jpg"
          alt="avatar"
          className="top-rank-img"
          style={{ cursor: `${person ? "auto" : "pointer"}` }}
        />
      </div>
      <div className="top-rank-review">
        <div
          className={`top-rank-review-name ${
            !person && "top-rank-review-name-story"
          }`}
        >
          {name}
        </div>
        {person ? (
          <div className="top-rank-review-level">
            <span className="top-rank-review-level-bar">
              Luyện Hư
              <span className="top-rank-review-level-bar-percent"></span>
            </span>
          </div>
        ) : (
          <div className="top-rank-review-chapter">
            <div className="top-rank-review-chapter-number">Chapter 356</div>
            <div className="top-rank-review-chapter-amount-read">
              <span>
                <ImEye />
              </span>
              <span>10M</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TopStoryAndPerson.propTypes = {
  person: PropTypes.bool,
  name: PropTypes.string,
  rankNumber: PropTypes.number,
};

export default TopStoryAndPerson;
