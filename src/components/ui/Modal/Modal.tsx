import React, { ReactNode } from 'react';
import orderSuccessIcon from "../../../assets/icons/order-success-icon.png";
import closeIcon from "../../../assets/icons/close-icon.png";
import './Modal.scss';

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  children?: ReactNode;
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
              <div className="modal__icon-div">
                <img src={orderSuccessIcon} alt="Order Success Icon"/>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;