import closeBtn from "../../../assets/images/close-btn.svg";
export default function Modal() {
  return (
    <div className="modal">
      <div className="modal-cart">
        <div className="modal-heading">
          <img src={closeBtn} alt="" />
          <span>Thêm món mới</span>
        </div>
      </div>
    </div>
  );
}
