import React from "react";
import "./Footer.scss";
import Wrapper from "../UI/Wrapper";
import logo from "../../assets/images/logo-footer.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const showList = (event) => {
    event.target.previousSibling.classList.toggle("minus");
    event.target.nextSibling.classList.toggle("list-opened");
  };

  return (
    <footer>
      <div className="contact-container">
        <Wrapper>
          <div className="contact">
            <div className="logo-container">
              <img src={logo} alt="logo-footer" />
            </div>
            <div className="grid">
              <div className="col">
                <div className="icon">
                  <i className="fas fa-plus" />
                  <i className="fas fa-minus" />
                </div>

                <span onClick={showList}>Thông tin website</span>
                <ul>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/">Đặt hàng</Link>
                  </li>
                  <li>
                    <Link to="/">Tin tức</Link>
                  </li>
                  <li>
                    <Link to="/">Tuyển dụng</Link>
                  </li>
                  <li>
                    <Link to="/">Khuyến mãi</Link>
                  </li>
                </ul>
                <div className="line" />
              </div>
              <div className="col">
                <div className="icon">
                  <i className="fas fa-plus" />
                  <i className="fas fa-minus" />
                </div>

                <span onClick={showList}>Điều khoản sử dụng</span>
                <ul>
                  <li>
                    <Link to="/terms">Quy chế website</Link>
                  </li>
                  <li>
                    <Link to="/policy">Bảo mật thông tin</Link>
                  </li>
                </ul>
                <div className="line" />
              </div>
              <div className="col">
                <div className="icon">
                  <i className="fas fa-plus" />
                  <i className="fas fa-minus" />
                </div>

                <span onClick={showList}>Hotline</span>
                <ul>
                  <li>Đặt hàng 1800 6936 (07:00-21:00)</li>
                  <li>Hỗ trợ 028.71.087.088 (07:00-21:00)</li>
                </ul>
                <div className="line" />
              </div>
              <div className="col">
                <div className="icon">
                  <i className="fas fa-plus" />
                  <i className="fas fa-minus" />
                </div>

                <span onClick={showList}>Liên hệ</span>
                <ul>
                  <li>
                    Head Office 1: 86 - 88 Cao Thang, Ward 4, District 3, Ho Chi
                    Minh, Vietnam.
                  </li>
                  <li>
                    Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Dien
                    Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh,
                    Vietnam.
                  </li>
                  <li>+84 2871 078 079</li>
                  <li>hi@thecoffeehouse.vn</li>
                </ul>
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="bottom-content"></div>
        </Wrapper>
      </div>
      <div className="copyright">
        <Wrapper>
          <p>Copyright © 2021 The Coffee House. All rights reserved.</p>
          <div style={{ minWidth: "40%", textAlign: "end" }}>
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/active.4cba64f.png"
              alt=""
            />
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
