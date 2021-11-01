import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrowDown from "../../assets/images/arrow-down.svg";
import coffee from "../../assets/images/coffee-solid.svg";
import historyIcon from "../../assets/images/history-order.svg";
import home from "../../assets/images/home-solid.svg";
import logoutIcon from "../../assets/images/logout.svg";
import news from "../../assets/images/newspaper-solid.svg";
import store from "../../assets/images/store-solid.svg";
import "./Navbar.scss";
import Wrapper from "./Wrapper";

export default function Navbar() {
  const [userCard, setUserCard] = useState(false);
  return (
    <nav>
      <Wrapper>
        <Link to="/">
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
            alt=""
            className="logo"
          />
        </Link>
        <Link to="/">
          <div className="takeAway">
            <img
              src="https://minio.thecoffeehouse.com/images/tch-web-order/Pickup2.png"
              alt=""
            />
            <div className="info">
              <h4>Mang đi</h4>
              <p>Tại: Nhập địa chỉ giao hàng</p>
            </div>
            <img src={arrowDown} alt="" />
          </div>
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/products">Đặt hàng</Link>
          </li>
          <li>
            <Link to="/blogs">Tin tức</Link>
          </li>
          <li>
            <Link to="/stores">Cửa hàng</Link>
          </li>
          <li>
            <Link to="/">Khuyến mãi</Link>
          </li>
          <li>
            <Link to="/">Tuyển dụng</Link>
          </li>
        </ul>
        <div className="user-and-cart">
          <Link to="/">
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/Login.70dc3d8.png"
              alt=""
              className="user"
              onClick={() => {
                setUserCard(!userCard);
              }}
            />
            {userCard && (
              <div className="userCard">
                <div>
                  <img src={historyIcon} alt="" />
                  Tra cứu đơn hàng
                </div>
                <div>
                  <img src={logoutIcon} alt="" />
                  Đăng nhập
                </div>
              </div>
            )}
          </Link>
          <Link to="/">
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/Carticon.373916c.png"
              alt=""
              className="cart"
            />
          </Link>
          <span></span>
        </div>
      </Wrapper>
      <div className="navListMobile">
        <ul>
          <li>
            <Link to="/">
              <img src={home} alt="" /> Trang chủ
            </Link>
          </li>
          <li>
            <Link to="/product-listing">
              <img src={coffee} alt="" />
              Đặt hàng
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <img src={news} alt="" />
              Tin tức
            </Link>
          </li>
          <li>
            <Link to="/stores">
              <img src={store} alt="" />
              Cửa hàng
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
