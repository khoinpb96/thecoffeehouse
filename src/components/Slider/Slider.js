import "./Slider.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";

export default function Slider() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    fetch("https://api.thecoffeehouse.com/api/v5/media/media-box", {
      headers: {
        accept: "*/*",
        "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
        "sec-ch-ua":
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        source: "TCH-WEB",
        "tch-app-version": "5.3.0",
        "tch-device-id": "d53abbd7-162d-4e76-8378-a02fc030c319",
      },
      referrer: "https://www.thecoffeehouse.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => res.json())
      .then((data) => setSlideData(data.data));
  }, []);

  return (
    <div className="splide-container">
      <Splide
        options={{
          rewind: true,
          speed: 600,
          width: 1200,
          autoplay: true,
          arrows: false,
        }}
      >
        {slideData.map((slide) => {
          return (
            <SplideSlide>
              <img src={slide["icon_web"]} alt="promo-banner" />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}
