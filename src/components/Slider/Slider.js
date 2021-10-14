import "./Slider.scss";
export default function Slider() {
  let index = 1;

  const sliding = setInterval(() => {
    document.querySelector(`#r${index}`).defaultChecked = false;
    document.querySelector(`#r${index + 1}`).defaultChecked = true;
    index++;
    if (index === 4) {
      index = 1;
    }
  }, 3000);

  return (
    <section className="slider">
      <div className="slidershow">
        <div className="slides">
          <input type="radio" name="slider" id="r1" defaultChecked />
          <input type="radio" name="slider" id="r2" />
          <input type="radio" name="slider" id="r3" />
          <input type="radio" name="slider" id="r4" />
          <div className="navigation">
            <label htmlFor="r1" className="bar" id="l1" />
            <label htmlFor="r2" className="bar" id="l2" />
            <label htmlFor="r3" className="bar" id="l3" />
            <label htmlFor="r4" className="bar" id="l4" />
          </div>
          <div className="slide s1">
            <img src="https://minio.thecoffeehouse.com/image/admin/BANNERWEB(2)_755416.jpg" />
          </div>
          <div className="slide">
            <img src="https://minio.thecoffeehouse.com/image/admin/banner-web-KETNOI-1200X480(1)_280533.jpg" />
          </div>
          <div className="slide">
            <img src="https://minio.thecoffeehouse.com/image/admin/1200x480_452005.png" />
          </div>
          <div className="slide">
            <img src="https://minio.thecoffeehouse.com/image/admin/WEB-bannehome-TUNGTANG_778598.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
