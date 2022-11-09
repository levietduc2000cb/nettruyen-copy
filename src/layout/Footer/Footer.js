import React from "react";
import { AiFillFacebook } from "react-icons/ai";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <div className="footer-contain-logo">
            <img
              src="https://st.nettruyenme.com/data/logos/logo-nettruyen.png"
              alt="logo-nettruyen"
              className="footer-container-logo-nettruyen"
            ></img>
          </div>
          <div className="footer-drop">
            <div className="footer-drop-contain-img">
              <a href="/">
                <img
                  src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.18169-1/22528449_1856634004370937_5820400839758379699_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=kR1BDrVGCcwAX_Bt4RH&_nc_ht=scontent.fhan17-1.fna&oh=00_AT--yjybBQ9i5ehj3uMPmSPk12lNwFvQOzysBrri6Bw3Zw&oe=636CD8ED"
                  alt=""
                  className="avatar-nettruyen"
                ></img>
              </a>
            </div>
            <div className="footer-drop-link-page">
              <a href="/" className="footer-drop-link-page-direction">
                NetTruyen.com - Truyen Tranh Online
              </a>
              <div className="footer-drop-link-like">
                <a href="/" className="footer-drop-link-like-btn">
                  <span>
                    <AiFillFacebook className="footer-drop-link-like-icon" />
                  </span>
                  <span>Like Page</span>
                </a>
                <p>170K likes</p>
              </div>
            </div>
          </div>
          <p className="footer-container-text">Liên hệ bản quyền</p>
        </div>
        <div className="footer-container-key-word">
          <h2 className="footer-container-key-word-title">Từ khóa</h2>
          <div className="footer-container-key-word-list-type">
            <a href="/">Truyện tranh</a>
            <a href="/">Truyện tranh online</a>
            <a href="/">Đọc truyện tranh</a>
            <a href="/">Truyện tranh hot</a>
            <a href="/">Truyện tranh hay</a>
            <a href="/">Truyện ngôn tình</a>
            <a href="/">Manhwa</a>
            <a href="/">Manga</a>
            <a href="/">Manhua</a>
            <a href="/">truyenqq</a>
            <a href="/">mi2manga</a>
            <a href="/">doctruyen3q</a>
            <a href="/">toptruyen</a>
            <a href="/">cmanga</a>
            <a href="/">vlogtruyen</a>
            <a href="/">blogtruyen</a>
            <a href="/">truyentranhaudio</a>
            <a href="/">vcomi</a>
          </div>
        </div>
        <div className="footer-container-text">Copyright © 2022 NetTruyen</div>
      </div>
    </footer>
  );
};

export default Footer;
