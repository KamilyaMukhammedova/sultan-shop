import React from 'react';
import './Basket.scss';
import basketIcon from '../../assets/basket-icon.png';

const Basket: React.FC = () => {
  return (
    <div className="basket">
      <div className="basket__icon-div">
        <img src={basketIcon} alt="Basket icon" className="basket__icon"/>
        <div className="basket__amount">3</div>
      </div>
      <div className="basket__inner">
        <p className="basket__name">Корзина</p>
        <p className="basket__sum">12 478 ₸</p>
      </div>
    </div>
  );
};

export default Basket;