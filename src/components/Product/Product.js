import { useState } from "react";
import "./Product.scss";
import noteBtn from "../../assets/images/note.svg";

export default function Product({ data }) {
  console.log(data);
  const options = data.options && data.options[0].items;

  const [amount, setAmount] = useState(1);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [sizeVal, setSizeVal] = useState(0);

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    data && (
      <section className="product">
        <div className="col">
          <img
            src={data.images && data.images[0]}
            alt={data.name}
            className="product__image"
          />
          <p className="product__desc">{data.description}</p>
        </div>
        <div className="col">
          <h2 className="product__name">{data.name}</h2>

          <span className="product__title">
            {data["base_price_str"]}
            <span className="product__price">
              <i
                className="decreBtn fas fa-minus"
                onClick={() => {
                  amount > 0 && setAmount((prev) => prev - 1);
                }}
              />
              <span>{amount}</span>
              <i
                className="increBtn fas fa-plus"
                onClick={() => {
                  amount < 10 && setAmount((prev) => prev + 1);
                }}
              />
            </span>
          </span>

          <label htmlFor="note" className="product__note">
            <img src={noteBtn} alt="noteBtn" />
            <input
              type="text"
              name="note"
              id="note"
              placeholder="Ghi chú thêm cho món này"
            />
          </label>

          <div className="product__size">
            <p>CHỌN SIZE (BẮT BUỘC)</p>
            <div className="labels">
              {options &&
                options.map((e, i) => {
                  return (
                    <label htmlFor={e.id} key={e.id}>
                      <input
                        type="radio"
                        name="size"
                        id={e.id}
                        value={e.price}
                        onChange={() => {
                          setSizeVal(e.price);
                        }}
                        defaultChecked={sizeIndex === i}
                      />
                      <div className="checkmark" />
                      <div className="value">
                        <p>{e.name}</p>
                        <p>{e["price_str"]}</p>
                      </div>
                    </label>
                  );
                })}
            </div>
          </div>
          <button className="addBtn">
            {((data.price + sizeVal) * amount)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            đ - Thêm vào giỏ hàng
          </button>
        </div>
        <div className="product-detail">
          <div className="product-detail__header">THÔNG TIN SẢN PHẨM</div>
          <div
            className="product-detail__content"
            dangerouslySetInnerHTML={createMarkup(data["description_html"])}
          />
        </div>
      </section>
    )
  );
}
