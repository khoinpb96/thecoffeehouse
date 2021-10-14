import Footer from "./Footer";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
