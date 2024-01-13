import React from "react";
import ReactDOM from "react-dom";
import './AuthModal.css';

function AuthModal({children}) {


    return ReactDOM.createPortal(
      <div className="modal-bg">
        {children}
      </div>,
      document.getElementById('modal')
    )
}

export { AuthModal };