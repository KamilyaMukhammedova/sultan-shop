import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BasketItem from "../../components/BasketItem/BasketItem";
import useModal from "../../components/ui/Modal/useModal";
import Modal from "../../components/ui/Modal/Modal";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import orderSuccessIcon from "../../assets/icons/order-success-icon.png";
import './Basket.scss';

const Basket: React.FC = () => {
  const {basket, totalSum} = useTypedSelector((state) => state.basket);
  const {isOpen, toggle} = useModal();
  const breadCrumbs = [{path: 'basket', name: 'Корзина'}];

  return (
    <>
      <div className="basket">
        <Breadcrumbs infoArr={breadCrumbs}/>
        <h1 className="basket__title" data-testid={'basket-title'}>Корзина</h1>
        <div className="basket__inner">
          {
            basket.length === 0 ? <p className="info-msg">Нет товаров</p> :
              <>
                {basket.map((item, index) => (
                  <BasketItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    brand={item.brand}
                    image={item.image}
                    description={item.description}
                    sizeType={item.sizeType}
                    size={item.size}
                    price={item.price}
                    amount={item.amount}
                    hasBorderBottom={index === basket.length - 1}
                  />
                ))}
                <div className="basket__options">
                  <button
                    type="button"
                    className="basket__order-btn"
                    onClick={toggle}
                  >
                    Оформить заказ
                  </button>
                  <div className="basket__total-sum">{totalSum} ₸</div>
                </div>
              </>
          }
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="modal__icon-div">
          <img src={orderSuccessIcon} alt="Order Success Icon"/>
        </div>
        <p className="modal__text-bold">Спасибо за заказ</p>
        <p className="modal__text">Наш менеджер свяжется с вами в ближайшее время</p>
      </Modal>
    </>
  );
};

export default Basket;