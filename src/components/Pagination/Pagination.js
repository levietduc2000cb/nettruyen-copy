import React from "react";
import PropTypes from "prop-types";
import { AiOutlineRight, AiOutlineDoubleRight } from "react-icons/ai";

import "./pagination.scss";

const Pagination = props => {
  const { totalPage } = props;
  return (
    <div className="pagination">
      <span className="active">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>90</span>
      <span>190</span>
      <span>280</span>
      <span>380</span>
      <span>{totalPage}</span>
      <span>
        <AiOutlineRight />
      </span>
      <span>
        <AiOutlineDoubleRight />
      </span>
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number,
};

export default Pagination;
