import React from "react";
import { FaInfoCircle } from "react-icons/fa";

import "./notifyblock.scss";

const NotifyBlock = props => {
  return (
    <div className="notify-block-wrapper">
      <div className="notify-block">
        <div className="notify-block-icon-wrapper">
          <FaInfoCircle className="icon-notify" />
        </div>
        <div className="notify-block-link">
          <div className="notify-block-link-dot"></div>
          <div className="notify-block-link-direction">
            <a href="/">Nhấn vào đây</a>
            <span> để lấy lại tài khoản đăng nhập và truyện đã theo dõi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyBlock;
