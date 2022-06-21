import React from "react";

function Modal({ onClose, children }) {
  return (
    <>
      <div className="absolute inset-0 bg-gray-800 opacity-25" />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </>
  );
}

export default Modal;
