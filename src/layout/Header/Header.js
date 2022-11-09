import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegLightbulb, FaComment } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RiBook3Fill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

import "./header.scss";

const Header = props => {
  return (
    <header className="header">
      <div className="container_header">
        <img
          src="https://st.nettruyenme.com/data/logos/logo-nettruyen.png"
          alt="image_nettruyen"
          className="container_header-img"
        ></img>
        <div className="container_header-mid">
          <div className="container_header-search-bar">
            <input
              type="text"
              placeholder="Tìm truyện..."
              spellCheck="false"
            ></input>
            <div>
              <BiSearchAlt2 className="search-icon" />
            </div>
          </div>
          <div>
            <FaRegLightbulb className="lightbulb-icon" />
            <FaComment className="comment-icon" />
          </div>
        </div>
        <div className="container_header-profile">
          <div className="container_header-profile-avatar">
            <img
              src="https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg"
              alt="image_avatar"
            ></img>
          </div>
          <div className="container_header-profile-nav">
            <span>Cá nhân</span>
          </div>
          <AiFillCaretDown className="caredown-icon" />
          <ul className="container_header-profile-list-nav">
            <li>
              <a href="/">
                <BsFillPersonFill className="icon-nav"></BsFillPersonFill>
                <span>Trang cá nhân</span>
              </a>
            </li>
            <li>
              <a href="/">
                <RiBook3Fill className="icon-nav"></RiBook3Fill>
                <span>Truyện theo dõi</span>
              </a>
            </li>
            <li>
              <a href="/">
                <TbLogout className="icon-nav"></TbLogout>
                <span>Thoát</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
