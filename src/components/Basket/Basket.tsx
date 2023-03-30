import React from 'react';
import basketIcon from '../../assets/basket-icon.png';
import './Basket.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Basket: React.FC = () => {
  const {totalAmount, totalSum} = useTypedSelector((state) => state.basket);

  return (
    <div className="basket">
      <div className="basket__icon-div">
        <img src={basketIcon} alt="Basket icon" className="basket__icon"/>
        <div className="basket__amount">{totalAmount}</div>
      </div>
      <div className="basket__inner">
        <p className="basket__name">Корзина</p>
        <p className="basket__sum">{totalSum} ₸</p>
      </div>
    </div>
  );
};

export default Basket;