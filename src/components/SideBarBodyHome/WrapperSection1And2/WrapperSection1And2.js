import React from "react";
import PropTypes from "prop-types";

import "./wrappersection1and2.scss";

const WrapperSection1And2 = props => {
  let { title, children, watchMore } = props;

  return (
    <div className="wrapper-section-1-and-2">
      <div className="section-head">
        <span className="section-head-title">{title}</span>
        {watchMore ? (
          <span className="section-head-watch-all">Xem tất cả</span>
        ) : (
          <span></span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

WrapperSection1And2.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  watchMore: PropTypes.bool,
};

export default WrapperSection1And2;
