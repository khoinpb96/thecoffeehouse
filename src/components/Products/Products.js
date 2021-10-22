import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../UI/Wrapper";
import CategoryList from "./CategoryList/CategoryList";
import ItemList from "./ItemList/ItemList";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

export default function Products() {
  const [menuData, setMenuData] = useState([]);
  const [listIndex, setListIndex] = useState(0);
  const [listData, setListData] = useState([]);
  const atHomePage = useLocation().pathname === "/";

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  console.log(count);

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v5/menu", {
      headers: {
        accept: "*/*",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        source: "TCH-WEB",
        "tch-app-version": "5.3.0",
        "tch-device-id": "8233f8c1-6e61-4e7f-9917-b3578d67b13e",
      },
      referrer: "https://www.thecoffeehouse.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"store_id":496,"type":"PICKUP"}',
      method: "POST",
      mode: "cors",
      credentials: "omit",
    })
      .then((response) => response.json())
      .then(
        (data) => {
          setMenuData(data.menu);
          setListData(data.menu[listIndex].products);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [listIndex]);

  return (
    <section className="products">
      <Wrapper>
        <div className="products-title">
          <i className="fas fa-trophy"></i>
          <span>Sản phẩm từ Nhà</span>
        </div>

        <CategoryList
          data={menuData}
          listNavigation={(i) => {
            setListIndex(i);
          }}
          listIndex={listIndex}
        />
        <ItemList
          data={atHomePage ? listData.slice(0, 12) : listData}
          atHomePage={atHomePage}
        />
      </Wrapper>
    </section>
  );
}
