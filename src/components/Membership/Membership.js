import Wrapper from "../UI/Wrapper";
import "./Membership.scss";

export default function Membership() {
  return (
    <section className="membership">
      <Wrapper>
        <div className="col1">
          <div className="row row1">
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/squarelogo.035676b.png"
              alt="Logo"
            />
            <p>
              Đặt qua app THE COFFEE HOUSE để tích điểm và hưởng quyền lợi thành
              viên.
            </p>
          </div>
          <div className="row row2">
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/app-store-2.a04cf2b.png"
              alt="get it on app store"
            />
            <img
              src="https://www.thecoffeehouse.com/_nuxt/img/google-play-2.9945b62.png"
              alt="get it on google play"
            />
          </div>
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/cf-bg.2a2088b.svg"
            className="col1-background-img"
            alt="background"
          />
        </div>
        <div className="col2">
          <img
            src="https://www.thecoffeehouse.com/_nuxt/img/newappv6.f2e1281.png"
            alt="illustration"
          />
        </div>
      </Wrapper>
    </section>
  );
}
