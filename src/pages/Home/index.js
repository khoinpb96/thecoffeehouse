import Slider from "../../components/Slider/Slider";
import Membership from "../../components/Membership/Membership";
import Products from "../../components/Products/Products";
import News from "../../components/News/News";

export default function Home() {
  return (
    <>
      <Slider />
      <Products />
      <News />
      <Membership />
    </>
  );
}
