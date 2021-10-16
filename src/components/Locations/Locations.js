import "./Locations.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Locations() {
  const showLocation = (e) => {
    e.target.classList.toggle("tab-opened");
  };
  return (
    <div className="carousel">
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          arrows: false,
          width: "50%",
        }}
      >
        <SplideSlide>
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/store-image.b29932d.png"
            alt="Store Banner"
          />
          <div className="carousel-card">
            <h5>Cửa hàng mới nhất ✨</h5>
            <div className="carousel-card-content">
              <p>The Coffee House (Grand World Phú Quốc)﻿</p>
              <span>Xem thêm thông tin</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/store-image.b29932d.png"
            alt="Store Banner"
          />
          <div className="carousel-card">
            <h5>Cửa hàng mới nhất ✨</h5>
            <div className="carousel-card-content">
              <p>The Coffee House (Grand World Phú Quốc)﻿</p>
              <span>Xem thêm thông tin</span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/store-image.b29932d.png"
            alt="Store Banner"
          />
          <div className="carousel-card">
            <h5>Cửa hàng mới nhất ✨</h5>
            <div className="carousel-card-content">
              <p>The Coffee House (Grand World Phú Quốc)﻿</p>
              <span>Xem thêm thông tin</span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <div className="map">
        <div style={{ justifyContent: "space-between" }} className="flex">
          <div className="flex">
            <i className="fa fa-home" />
            <span>Tìm Một Cửa Hàng</span>
          </div>
          <div className="flex">
            <span>Xem toàn bộ cửa hàng</span>
            <i className="fa fa-arrow-right" />
          </div>
        </div>
        <div className="dropbox" onClick={showLocation}>
          <span>Vui lòng chọn một thành phố, quận, huyện</span>
          <i className="fas fa-chevron-down" />
          <ul className="options">
            <li>Quận 1</li>
            <li>Quận 2</li>
            <li>Quận 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
