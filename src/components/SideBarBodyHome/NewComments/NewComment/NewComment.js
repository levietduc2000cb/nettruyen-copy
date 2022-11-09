import React from "react";
import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";

import "./newcomment.scss";

const NewComment = props => {
  const { nameStory, chap, namePerson, avatarPerson, comment, time } = props;

  return (
    <div className="new-comment">
      <div className="new-comment-story">
        <span className="new-comment-story-name">{nameStory}</span>
        <span className="new-comment-story-chapter">{`Chapter ${chap}`}</span>
      </div>
      <div className="new-comment-person">
        <div className="new-comment-person-avatar-wrapper">
          <img
            src={avatarPerson}
            alt="avatar-person"
            className="new-comment-person-avatar-img"
          />
        </div>
        <div className="new-comment-person-comment">
          <div className="new-comment-person-comment-introduce">
            <div className="new-comment-person-comment-introduce-name">
              {namePerson}
            </div>
            <div className="new-comment-person-comment-introduce-time">
              <span>
                <FaRegClock />
              </span>
              <span>{`${time} phút trước`}</span>
            </div>
          </div>
          <div className="new-comment-person-comment-text">{comment}</div>
        </div>
      </div>
    </div>
  );
};

NewComment.propTypes = {
  nameStory: PropTypes.string,
  namePerson: PropTypes.string,
  avatarPerson: PropTypes.string,
  chap: PropTypes.number,
  comment: PropTypes.string,
  time: PropTypes.string,
};

export default NewComment;
