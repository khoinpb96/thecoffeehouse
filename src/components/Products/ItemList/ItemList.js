import "./ItemList.scss";
import addBtn from "../../../assets/images/add-btn.svg";
import { Link } from "react-router-dom";
import closeBtn from "../../../assets/images/close-btn.svg";

export default function ItemList({ data, atHomePage }) {
  return (
    <>
      <div className="item-list" style={atHomePage ? {} : { marginBottom: 54 }}>
        {data.map((item) => {
          return (
            <div className="item-card" key={item.id}>
              <Link to="/">
                {/*<Link to={item.slug} >*/}
                <img src={item.thumbnail} alt="product-thumbnail" />
                <div className="cart">
                  <span>{item.name}</span>
                  <div className="add-to-cart">
                    <p>{item.base_price_str}</p>
                    <div className="add-btn">
                      <img src={addBtn} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="modal">
        <div className="modal-cart">
          <div className="modal-heading">
            <img src={closeBtn} alt="" />
            <span>Thêm món mới</span>
          </div>
        </div>
      </div> */}
      {atHomePage && (
        <div className="product-redirect-link">
          <Link to="/product-listing">
            Xem tất cả
            <i className="fa fa-arrow-right" />
          </Link>
        </div>
      )}
    </>
  );
}
