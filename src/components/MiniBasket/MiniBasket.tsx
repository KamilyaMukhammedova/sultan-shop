import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import basketIcon from '../../assets/icons/basket-icon.png';
import './MiniBasket.scss';

const MiniBasket: React.FC = () => {
  const {totalAmount, totalSum} = useTypedSelector((state) => state.basket);

  return (
    <div className="mini-basket">
      <div className="mini-basket__icon-div">
        <img src={basketIcon} alt="MiniBasket icon" className="mini-basket__icon"/>
        <div className="mini-basket__amount">{totalAmount}</div>
      </div>
      <div className="mini-basket__inner">
        <p className="mini-basket__name">Корзина</p>
        <p className="mini-basket__sum">{totalSum} ₸</p>
      </div>
    </div>
  );
};

export default MiniBasket;