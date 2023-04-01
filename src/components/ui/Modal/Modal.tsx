import React, { ReactNode } from 'react';
import closeIcon from "../../../assets/icons/close-icon.png";
import './Modal.scss';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
}

const Modal: React.FC<IProps> = ({isOpen, toggle, children}) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__overlay" onClick={toggle}/>
          <div onClick={(e) => e.stopPropagation()} className="modal__box">
            <div className="modal__close-div" onClick={toggle}>
              <img src={closeIcon} alt="Close Icon"/>
            </div>
            <div className="modal__inner">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;