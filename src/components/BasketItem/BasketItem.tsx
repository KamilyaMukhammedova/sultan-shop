import React, { useState } from 'react';
import { useActions } from "../../hooks/useActions";
import Size from "../Size/Size";
import trashIcon from "../../assets/icons/trash-icon.png";
import './BasketItem.scss';

interface IProps {
  id: string
  name: string,
  brand: string,
  image: string,
  description: string,
  sizeType: string,
  size: number,
  price: number,
  amount: number,
  hasBorderBottom: boolean
}

const BasketItem: React.FC<IProps> = (props) => {
  const {addToBasket, decreaseProductAmountInBasket, removeProductFromBasket} = useActions();

  const [amount, setAmount] = useState(props.amount);

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(prevState => prevState - 1);
      decreaseProductAmountInBasket(props.id);
    }
  };

  const increaseAmount = () => {
    if (amount <= 9) {
      setAmount(prevState => prevState + 1);
      addToBasket(props.id);
    }
  };

  const removeProduct = () => {
    removeProductFromBasket(props.id);
  };

  return (
    <div className={`basket-item ${props.hasBorderBottom && 'basket-item_border-bottom'}`}>
      <div className="basket-item__img-div">
        <img src={props.image} alt={props.name}/>
      </div>
      <div className="basket-item__info-div">
        <Size sizeType={props.sizeType} size={props.size}/>
        <p className="basket-item__name">
          <span>{props.brand}</span>
          {props.name}
        </p>
        <p className="basket-item__description">{props.description}</p>
      </div>
      <div className="amount basket-item__amount">
        <button type="button" className="amount__btn" onClick={decreaseAmount}>-</button>
        <span className="amount__number">{amount}</span>
        <button type="button" className="amount__btn" onClick={increaseAmount}>+</button>
      </div>
      <div className="basket-item__price">
        <span>{props.price} ₸</span>
      </div>
      <div className="basket-item__remove">
        <button type="button" className="basket-item__remove-btn" onClick={removeProduct}>
          <img src={trashIcon} alt="Trash icon"/>
        </button>
      </div>
    </div>
  );
};

export default BasketItem;