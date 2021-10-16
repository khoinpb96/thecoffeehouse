import Slider from "../components/Slider/Slider";
import Membership from "../components/Membership/Membership";
import Products from "../components/Products/Products";
import News from "../components/News/News";
import Locations from "../components/Locations/Locations";
export default function Home() {
  return (
    <main>
      <Slider />
      <Products />
      <News />
      <Locations />
      <Membership />
    </main>
  );
}
