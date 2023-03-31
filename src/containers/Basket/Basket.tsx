import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import BasketItem from "../../components/BasketItem/BasketItem";
import useModal from "../../components/ui/Modal/useModal";
import Modal from "../../components/ui/Modal/Modal";
import './Basket.scss';

const Basket: React.FC = () => {
  const {basket, totalSum} = useTypedSelector((state) => state.basket);
  const { isOpen, toggle } = useModal();

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <p className="modal__text-bold">Спасибо за заказ</p>
        <p className="modal__text">Наш менеджер свяжется с вами в ближайшее время</p>
      </Modal>
      <div className="basket">
        <h1 className="basket__title">Корзина</h1>
        <div className="basket__inner">
          {
            basket.length === 0 ? <p className="basket__message">Нет товаров</p> :
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
    </>
  );
};

export default Basket;