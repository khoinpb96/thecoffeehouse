import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Footer from "./components/UI/Footer";
import Navbar from "./components/UI/Navbar";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import ProductPage from "./pages/ProductPage";
import ProductListing from "./pages/ProductListing";
import Stores from "./pages/Stores";
import Terms from "./pages/Terms";
import NewPage from "./components/News/NewPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route exact path="/" component={Home} />

      <Route exact path="/products" component={ProductListing} />
      <Route exact path="/products/:slug" component={ProductPage} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/blogs/:slug" component={NewPage} />
      <Route exact path="/stores" component={Stores} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/terms" component={Terms} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
