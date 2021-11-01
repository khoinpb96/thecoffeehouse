import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v5/menu/product-detail", {
      headers: {
        accept: "*/*",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        source: "TCH-WEB",
        "tch-app-version": "5.3.0",
        "tch-device-id": "1cefe26b-0b01-4201-9ada-2d45bd427278",
      },
      referrer: "https://www.thecoffeehouse.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{\"id\":\"\",\"slug\":\"${param.slug}\"}`,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setData(data.product);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <main>
      <Product data={data} />
    </main>
  );
}
