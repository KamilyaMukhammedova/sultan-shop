import React from 'react';
import { Products } from "../../types/products";
import volumeIcon from '../../assets/volume-icon.png';
import weightIcon from '../../assets/weight-icon.png';
import basketIcon from '../../assets/basket-white-icon.png';
import './ProductCard.scss';

type IProps = Omit<Products, 'description' | 'type'>;

const ProductCard: React.FC<IProps> = (props) => {
  return (
    <div className="productCard">
      <div className="productCard__image-div">
        <img src={props.image} alt={props.name} className="productCard__image"/>
      </div>
      <div className="productCard__size-div">
        <img
          src={props.sizeType === 'volume' ? volumeIcon : weightIcon}
          alt="Size type icon"
          className="productCard__size-type-icon"
        />
        <span className="productCard__size-text">{props.size}</span>
        <span className="productCard__size-text">
          {props.sizeType === 'volume' ? 'мл' : 'г'}
        </span>
      </div>
      <h6 className="productCard__name">
        <span className="productCard__brand">{props.brand}</span>
        <span>{props.name}</span>
      </h6>
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
        <button type="button" className="productCard__basket-btn">
          <span className="productCard__basket-btn-text">В корзину</span>
          <img src={basketIcon} alt="Basket icon"/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;