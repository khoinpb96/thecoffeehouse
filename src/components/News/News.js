import "./News.scss";
import Wrapper from "../UI/Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsList from "./NewsList/NewsList";
import { useLocation } from "react-router-dom";

export default function News() {
  const [postsIndex, setPostsIndex] = useState(Math.floor(Math.random() * 3));
  const [postsData, setPostsData] = useState([]);
  const atHomePage = useLocation().pathname === "/";

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v5/news/newsfeed", {
      headers: {
        accept: "*/*",
        "sec-ch-ua":
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        source: "TCH-WEB",
        "tch-app-version": "5.3.0",
        "tch-device-id": "91c07cdc-eae2-4b1a-ae09-07467e74b83b",
      },
      referrer: "https://www.thecoffeehouse.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => res.json())
      .then((data) => setPostsData(data.news[postsIndex].posts));
  }, [postsIndex]);

  const redirectLink = (
    <div className="product-redirect-link">
      <Link to="/product-listing">
        Xem tất cả
        <i className="fa fa-arrow-right" />
      </Link>
    </div>
  );

  return (
    <section className="news">
      <Wrapper>
        <div className="news-title">
          <i className="fa fa-newspaper" />
          <span>{atHomePage ? "Tin Tức" : "Tin tức mới nhất"}</span>
        </div>
        <div className="news-tab">
          <span
            className={postsIndex === 0 && "active"}
            onClick={(e) => {
              console.log(e.target);
              setPostsIndex(0);
            }}
          >
            ƯU ĐÃI ĐẶC BIỆT
          </span>
          <span
            className={postsIndex === 1 && "active"}
            onClick={(e) => {
              console.log(e.target);
              setPostsIndex(1);
            }}
          >
            CẬP NHẬT TỪ NHÀ
          </span>
          <span
            className={postsIndex === 2 && "active"}
            onClick={(e) => {
              console.log(e.target);
              setPostsIndex(2);
            }}
          >
            #COFFEELOVER
          </span>
        </div>
        <NewsList
          data={atHomePage ? postsData.slice(0, 8) : postsData}
          atHomePage={atHomePage}
        />

        {atHomePage && redirectLink}
      </Wrapper>
    </section>
  );
}
