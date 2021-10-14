import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Blogs from "./pages/Blogs/index";
import Home from "./pages/Home/index";
import ProductListing from "./pages/ProductListing/index";
import Stores from "./pages/Stores/index";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/product-listing" component={ProductListing} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/stores" component={Stores} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
