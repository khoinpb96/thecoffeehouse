import { BrowserRouter, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Stores from "./pages/Stores";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/product-listing" component={ProductListing} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/terms" component={Terms} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
