import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
const Modal = ({ item, active, onClose }) => {
  const modalRef = useRef();
  useEffect(() => {
    const height = (modalRef.current.offsetWidth * 9) / 16 + "px";
    modalRef.current.setAttribute("height", height);
  }, []);
  return (
    <div
      className={`flex items-center justify-center fixed z-100 top-0 left-0 right-0 bottom-0 overflow-auto bg-black bg-opacity-40  ${
        active ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="p-8 bg-main_bg w-[80%] transition-duration: 600ms relative lg:w-[50%] modal__content ">
        <iframe ref={modalRef} width="100%" title="trailer" src={item}></iframe>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark absolute right-2 top-1 text-2xl cursor-pointer transition duration-300 text-white hover:text-primary"></i>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
