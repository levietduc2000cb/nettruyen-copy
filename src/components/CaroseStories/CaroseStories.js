import React, { useRef } from "react";
// import PropTypes from "prop-types";
import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./carosestories.scss";
import ItemStory from "../ItemStory/ItemStory";

const CaroseStories = props => {
  const ref = useRef({});

  const previous = () => {
    ref.current.slickPrev();
  };

  const next = () => {
    ref.current.slickNext();
  };

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="carose-contain">
      <Slider ref={ref} {...settings}>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
        <div>
          <ItemStory />
        </div>
      </Slider>
      <div onClick={previous} className="carose-contain-btn btn-pre">
        <FaChevronLeft className="icon-pre carose-contain-btn-icon" />
      </div>
      <div onClick={next} className="carose-contain-btn btn-next">
        <FaChevronRight className="icon-next carose-contain-btn-icon" />
      </div>
    </div>
  );
};

// CaroseStories.propTypes = {};

export default CaroseStories;
