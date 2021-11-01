import { Link } from "react-router-dom";

export default function RedirectLink({ link }) {
  return (
    <div className="product-redirect-link">
      <Link to={link ? `/${link}` : "/"}>
        Xem tất cả
        <i className="fa fa-arrow-right" />
      </Link>
    </div>
  );
}
