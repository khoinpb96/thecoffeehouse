import "./StoresList.scss";
import Wrapper from "../UI/Wrapper";
import storeIcon from "../../assets/images/store-icon.svg";
import { useEffect, useState } from "react";

export default function StoresList() {
  const [storesData, setStoresData] = useState([]);
  const [location, setLocation] = useState("Hồ Chí Minh");

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v5/stores/all")
      .then((res) => res.json())
      .then((data) => setStoresData(data.stores));
  }, []);

  const uniqueCity = [
    ...new Set(storesData.map((city) => city["pu_city"]).filter((e) => e)),
  ];

  const filteredData = storesData.filter((e) => e["pu_city"] === location);

  const setLocationHandler = (name) => {
    setLocation(name);
  };

  return (
    <Wrapper>
      <div className="stores-list">
        <div className="stores-list-title">
          <img src={storeIcon} alt="store-icon" />
          <h5> Hệ thống cửa hàng The Coffee House</h5>
        </div>
      </div>

      <div className="stores-filter">
        {uniqueCity.map((cityName) => {
          return (
            <div
              key={cityName}
              className="stores-filter-btn"
              style={
                location === cityName
                  ? {
                      background: "#fa8c16",
                      color: "#fff",
                    }
                  : {}
              }
              onClick={() => {
                setLocationHandler(cityName);
              }}
            >
              {cityName}
            </div>
          );
        })}
      </div>

      <div className="stores-filter-detail">
        <span>
          Vui lòng chọn quận/huyện <i className="fas fa-chevron-down" />
        </span>
        <input
          type="text"
          placeholder="Nhập tên đường, quận huyện, tỉnh thành"
        />
      </div>

      <h5 className="total-stores">Tìm thấy {filteredData.length} cửa hàng</h5>

      <div className="store-cards-list">
        {filteredData.map((e, index) => {
          return (
            <div className="stores-card" key={index}>
              <div
                className="stores-card-image"
                style={{
                  background: `url(${e.images[0]}) center / cover no-repeat `,
                }}
              />
              <div className="stores-card-content">
                <p>{e.name}</p>
                <p>{e["full_address"]}</p>
                <p className="distance">Cách đây 0.5km</p>

                <div className="stores-card-content-links">
                  <span>Xem bản đồ</span>
                  <span>Chi tiết cửa hàng </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
