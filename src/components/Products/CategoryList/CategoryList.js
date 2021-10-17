import "./CategoryList.scss";

export default function CaregoryList({ data, listNavigation, listIndex }) {
  return (
    <div className="category-list">
      {data.map((item, index) => (
        <div className="category-card" key={item.id}>
          <span
            onClick={() => {
              listNavigation(index);
            }}
          >
            <div className={listIndex === index ? "circle active" : "circle"}>
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
