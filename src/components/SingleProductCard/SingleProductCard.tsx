import React, { useState } from 'react';
import { useActions } from "../../hooks/useActions";
import { useParams } from "react-router-dom";
import { Product } from "../../types/products";
import Size from "../Size/Size";
import basketIcon from '../../assets/icons/basket-white-icon.png';
import shareIcon from '../../assets/icons/share-icon.png';
import priceListIcon from '../../assets/icons/price-list-dark-icon.png';
import arrowUpIcon from '../../assets/icons/arrow-up-icon.png';
import arrowDownIcon from '../../assets/icons/arrow-down-icon.png';
import './SingleProductCard.scss';

const SingleProductCard: React.FC<Product> = (props) => {
  const {addToBasket} = useActions();
  const {id} = useParams() as {id: string};

  const [amount, setAmount] = useState(1);
  const [descriptionIsHidden, setDescriptionIsHidden] = useState(false);
  const [fullInfoIsHidden, setFullInfoIsHidden] = useState(false);

  const onToggleDescription = () => {
    setDescriptionIsHidden(prevState => !prevState);
  };

  const onToggleFullInfo = () => {
    setFullInfoIsHidden(prevState => !prevState);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(prevState => prevState - 1);
    }
  };

  const increaseAmount = () => {
    if (amount <= 9) {
      setAmount(prevState => prevState + 1);
    }
  };

  const addProductToBasket = () => {
    addToBasket(id, amount);
  };

  const productInfo = (
    <>
      <p className="singleProductCard__info-text">
        Производитель:
        <span className="singleProductCard__info-bold">{props.producer}</span>
      </p>
      <p className="singleProductCard__info-text">
        Бренд:
        <span className="singleProductCard__info-bold">{props.brand}</span>
      </p>
      <p className="singleProductCard__info-text">
        Артикул:
        <span className="singleProductCard__info-bold">{props.barcode}</span>
      </p>
      <p className="singleProductCard__info-text">
        Штрихкод:
        <span className="singleProductCard__info-bold">{props.barcode}</span>
      </p>
    </>
  );

  return (
    <section className="singleProductCard">
      <div className="singleProductCard__img-div">
        <img src={props.image} alt={props.name} className="singleProductCard__img"/>
      </div>
      <div className="singleProductCard__details-div">
        <p className="singleProductCard__in-stock">В наличии</p>
        <p className="singleProductCard__name">
          <span className="singleProductCard__brand">{props.brand}</span>
          {props.name}
        </p>
        <div className="singleProductCard__size">
          <Size sizeType={props.sizeType} size={props.size}/>
        </div>
        <div className="singleProductCard__box">
          <div className="singleProductCard__price">{props.price} ₸</div>
          <div className="amount singleProductCard__amount">
            <button type="button" className="amount__btn" onClick={decreaseAmount}>-</button>
            <span className="amount__number" role={'amountInfo'}>{amount}</span>
            <button type="button" className="amount__btn" onClick={increaseAmount}>+</button>
          </div>
          <button type="button" className="singleProductCard__basket-btn" onClick={addProductToBasket}>
            <span className="singleProductCard__basket-btn-text">В корзину</span>
            <img src={basketIcon} alt="MiniBasket icon"/>
          </button>
        </div>
        <div className="singleProductCard__box2">
          <div className="singleProductCard__box-inner singleProductCard__share">
            <img src={shareIcon} alt="Share icon"/>
          </div>
          <div className="singleProductCard__box-inner singleProductCard__delivery">
            При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
          </div>
          <div className="singleProductCard__box-inner singleProductCard__price-list">
            <span>Прайс-лист</span>
            <img src={priceListIcon} alt="Price list icon"/>
          </div>
        </div>
        <div className="singleProductCard__brief-info">
          {productInfo}
        </div>
        <div className="singleProductCard__subtitle" onClick={onToggleDescription} role={'toggle-btn'}>
          <span>Описание</span>
          <img
            src={descriptionIsHidden ? arrowDownIcon : arrowUpIcon}
            alt="Arrow icon"
          />
        </div>
        <p className={`singleProductCard__description ${descriptionIsHidden ? 'hide' : 'show'}`} role={'description'}>
          {props.description}
        </p>
        <div className="singleProductCard__subtitle" onClick={onToggleFullInfo}>
          <span>Характеристики</span>
          <img
            src={fullInfoIsHidden ? arrowDownIcon : arrowUpIcon}
            alt="Arrow icon"
          />
        </div>
        <div className={`singleProductCard__full-info ${fullInfoIsHidden ? 'hide' : 'show'}`}>
          <p className="singleProductCard__info-text">
            Назначение:
            <span className="singleProductCard__info-bold">{props.brand}</span>
          </p>
          <p className="singleProductCard__info-text">
            Тип:
            <span className="singleProductCard__info-bold">{props.type.join(', ')}</span>
          </p>
          {productInfo}
          <p className="singleProductCard__info-text">
            {props.sizeType === 'volume' ? 'Объем' : 'Вес'} :
            <span className="singleProductCard__info-bold">
              {props.size}
              {props.sizeType === 'volume' ? 'мл' : 'г'}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;