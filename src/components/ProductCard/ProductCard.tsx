import React from 'react';
import { useActions } from "../../hooks/useActions";
import { Link } from "react-router-dom";
import { ProductMutation } from "../../types/products";
import Size from "../Size/Size";
import basketIcon from '../../assets/icons/basket-white-icon.png';
import './ProductCard.scss';

type IProps = Omit<ProductMutation, 'description'|'type'>;

const ProductCard: React.FC<IProps> = (props) => {
  const {addToBasket} = useActions();

  const onAddBtn = () => {
    addToBasket(props.id);
  };

  return (
    <div className="productCard">
      <div className="productCard__image-div">
        <img src={props.image} alt={props.name} className="productCard__image"/>
      </div>
      <div className="productCard__size-div">
        <Size sizeType={props.sizeType} size={props.size}/>
      </div>
      <Link to={'/product/' + props.id} className="productCard__linkTo">
        <h6 className="productCard__name">
          <span className="productCard__brand">{props.brand}</span>
          <span>{props.name}</span>
        </h6>
      </Link>
      <div className="productCard__inner">
        <p className="productCard__info">
          Штрихкод:
          <span className="productCard__info-bold">{props.barcode}</span>
        </p>
        <p className="productCard__info">
          Производитель:
          <span className="productCard__info-bold">{props.producer}</span>
        </p>
        <p className="productCard__info">
          Бренд:
          <span className="productCard__info-bold">{props.brand}</span>
        </p>
      </div>
      <div className="productCard__inner2">
        <span className="productCard__price">{props.price} ₸</span>
        <button type="button" className="productCard__basket-btn" onClick={onAddBtn}>
          <span className="productCard__basket-btn-text">В корзину</span>
          <img src={basketIcon} alt="MiniBasket icon"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;