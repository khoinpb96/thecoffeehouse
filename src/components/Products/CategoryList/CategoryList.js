import "./CategoryList.scss";
import { Link } from "react-router-dom";

export default function CaregoryList({ data, listNavigation }) {
  return (
    <div className="category-list">
      {data.map((item, index) => (
        <div className="category-card" key={item.id}>
          <Link
            to="/"
            onClick={() => {
              listNavigation(index);
            }}
          >
            <div className="circle">
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
