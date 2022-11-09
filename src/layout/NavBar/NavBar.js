import React from "react";
import { FaHome, FaSignal, FaRegThumbsUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { FiRefreshCw } from "react-icons/fi";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

import "./navbar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul className="container_list-nav">
        <li className="nav">
          <a href="/" className="nav-link active">
            <FaHome className="home-icon" />
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            hot
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            theo dõi
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            lịch sử
          </a>
        </li>
        <li className="nav nav-type">
          <a href="/" className="nav-link">
            thể loại
            <AiFillCaretDown className="nav-down-icon" />
          </a>
          <div className="nav-block-type">
            <div className="nav-list-type">
              <a href="/" className="type nav-active-type">
                Tất cả
              </a>
              <a href="/" className="type">
                Action
              </a>
              <a href="/" className="type">
                Adult
              </a>
              <a href="/" className="type">
                Adventure
              </a>
              <a href="/" className="type">
                Anime
              </a>
              <a href="/" className="type">
                Chuyển sinh
              </a>
              <a href="/" className="type">
                Comedy
              </a>
              <a href="/" className="type">
                Comic
              </a>
              <a href="/" className="type">
                Cooking
              </a>
              <a href="/" className="type nav-active-type">
                Cổ Đại
              </a>
              <a href="/" className="type">
                Doujinshi
              </a>
              <a href="/" className="type">
                Drama
              </a>
              <a href="/" className="type nav-active-type">
                Đam Mỹ
              </a>
              <a href="/" className="type">
                Ecchi
              </a>
              <a href="/" className="type">
                Fantasy
              </a>
              <a href="/" className="type">
                Gender Bender
              </a>
              <a href="/" className="type">
                Harem
              </a>
              <a href="/" className="type">
                Historical
              </a>
              <a href="/" className="type">
                Horror
              </a>
              <a href="/" className="type">
                Josei
              </a>
              <a href="/" className="type">
                Live action
              </a>
              <a href="/" className="type">
                Manga
              </a>
              <a href="/" className="type nav-active-type">
                Manhua
              </a>
              <a href="/" className="type">
                Manhwa
              </a>
              <a href="/" className="type">
                Martial Arts
              </a>
              <a href="/" className="type">
                Mature
              </a>
              <a href="/" className="type">
                Mecha
              </a>
              <a href="/" className="type">
                Mystery
              </a>
              <a href="/" className="type nav-active-type">
                Ngôn Tình
              </a>
              <a href="/" className="type">
                One shot
              </a>
              <a href="/" className="type">
                Psychological
              </a>
              <a href="/" className="type nav-active-type">
                Romance
              </a>
              <a href="/" className="type">
                School Life
              </a>
              <a href="/" className="type">
                Sci-fi
              </a>
              <a href="/" className="type">
                Seinen
              </a>
              <a href="/" className="type">
                Shoujo Ai
              </a>
              <a href="/" className="type">
                Shounen
              </a>
              <a href="/" className="type">
                Shounen Ai
              </a>
              <a href="/" className="type">
                Slice of Life
              </a>
              <a href="/" className="type">
                Smut
              </a>
              <a href="/" className="type">
                Soft Yuri
              </a>
              <a href="/" className="type">
                Soft Yaoi
              </a>
              <a href="/" className="type">
                Sports
              </a>
              <a href="/" className="type">
                Supernatural
              </a>
              <a href="/" className="type">
                Thiếu nhi
              </a>
              <a href="/" className="type">
                Tragedy
              </a>
              <a href="/" className="type">
                Trinh Thám
              </a>
              <a href="/" className="type">
                Truyện scan
              </a>
              <a href="/" className="type">
                Truyện màu
              </a>
              <a href="/" className="type">
                Webtoon
              </a>
              <a href="/" className="type nav-active-type">
                Xuyên Không
              </a>
            </div>
            <div className="nav-list-type-des">Mô tả thể loại truyện</div>
          </div>
        </li>
        <li className="nav nav-rank">
          <a href="/" className="nav-link">
            xếp hạng
            <div className="nav-icons">
              <AiFillCaretUp className="nav-rating-up-icon" />
              <AiFillCaretDown className="nav-rating-down-icon" />
            </div>
          </a>
          <ul className="nav-rank-list">
            <li>
              <a href="/" className="nav-rank-list-link">
                <ImEye className="nav-rank-list-icon" />
                Top all
              </a>
              <a href="/" className="nav-rank-list-link">
                <ImEye className="nav-rank-list-icon" />
                Top tháng
              </a>
              <a href="/" className="nav-rank-list-link">
                <ImEye className="nav-rank-list-icon" />
                Top tuần
              </a>
              <a href="/" className="nav-rank-list-link">
                <ImEye className="nav-rank-list-icon" />
                Top ngày
              </a>
            </li>
            <li>
              <a
                href="/"
                className="nav-rank-list-link nav-rank-list-link-important"
              >
                <FaSignal className="nav-rank-list-icon" />
                Truyện full
              </a>
              <a href="/" className="nav-rank-list-link">
                <FaRegThumbsUp className="nav-rank-list-icon" />
                Yêu thích
              </a>
              <a href="/" className="nav-rank-list-link">
                <FiRefreshCw className="nav-rank-list-icon" />
                Mới cập nhập
              </a>
              <a href="/" className="nav-rank-list-link">
                <BsFillCloudArrowUpFill className="nav-rank-list-icon" />
                Truyện mới
              </a>
            </li>
          </ul>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            tìm truyện
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            con gái
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            con trai
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            tải app
          </a>
        </li>
        <li className="nav">
          <a href="/" className="nav-link">
            group
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
