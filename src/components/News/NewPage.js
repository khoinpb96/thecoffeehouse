import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NewPage.scss";

export default function NewPage() {
  const param = useParams();
  const [data, setData] = useState([]);

  function createMarkup(html) {
    return { __html: html };
  }

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
      .then((data) => {
        setData(
          ...data.news
            .map((e) => e.posts.find((post) => post.id === param.slug))
            .filter((e) => e)
        );
      });
  }, []);

  const html =
    data.html &&
    data.html
      .split(" ")
      .map((e) => {
        if (e.includes("src")) {
          return e.replace(`src="`, `src="https://feed.thecoffeehouse.com`);
        }
        if (e.includes("<img")) {
          console.log(e);
        }
        return e;
      })
      .join(" ");
  console.log(html);

  return (
    <main>
      <div className="new" dangerouslySetInnerHTML={createMarkup(html)} />
    </main>
  );
}
