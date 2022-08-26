import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { GrClose } from "react-icons/gr";
import tmdbApi, { category } from "../../api/tmdbApi";
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
      <div className="p-8 bg-main_bg w-[80%] opacity-100 transition-duration: 600ms relative lg:w-[80%] modal__content ">
        <iframe
          ref={modalRef}
          width="100%"
          height="500px"
          title="trailer"
          src={item}
        ></iframe>
        <button onClick={onClose}>
          <i className="fa-solid fa-xmark absolute right-2 top-1 text-2xl cursor-pointer transition duration-300 text-white hover:text-primary"></i>
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

// export const ModalContent = (props) => {
//   const contentRef = useRef();
//   const closeModal = () => {
//     contentRef.current.parentNode.classList.remove("active");
//     if (props.onClose) props.onClose();
//   };

//   return (
//     <div
//       ref={contentRef}
//       className="p-8 bg-main_bg w-[80%] opacity-100 translate-y-[-250px] transition-duration: 600ms relative lg:w-[80%] modal__content"
//     >
//       {props.children}
//       <div className="" onClick={closeModal}>
//         <GrClose className="absolute right-1 top-1 text-2xl cursor-pointer hover:text-main_bg" />
//       </div>
//     </div>
//   );
// };

// ModalContent.propTypes = {
//   onClose: PropTypes.func,
// };

export default Modal;
