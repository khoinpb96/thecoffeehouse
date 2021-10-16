import "./NewsList.scss";
export default function NewsCard({ data, atHomePage }) {
  return (
    <div className="news-list" style={atHomePage ? {} : { marginBottom: 54 }}>
      {data.map((post) => {
        return (
          <div className="news-card" key={post.id}>
            <div
              className="news-img"
              style={{
                background: `url(${post.thumbnail}) center center / cover  no-repeat`,
              }}
            />
            <div className="news-contents">
              <h5>{post.title}</h5>
              <p>
                Bạn mua 5 ly cà phê - Nhà tặng thêm 2 (Hạn sử dụng 10 ngày kể từ
                ngày mua).
              </p>
              <button>ĐỌC TIẾP</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
