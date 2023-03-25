import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo-white.png';
import arrowRightIcon from '../../assets/arrow-right-icon.png';
import priceListIcon from "../../assets/price-list-icon.png";
import whatsAppIcon from "../../assets/whatsApp-icon.png";
import telegramIcon from "../../assets/telegram-icon.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import './Footer.scss';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__box1">
            <div className="footer__logo-div">
              <Link to={'/'} className="footer__logo-link">
                <img src={logo} alt="Logo" className="footer__logo-img"/>
              </Link>
              <div className="footer__hidden-div">
                <button className="footer__price-list-btn">
                  <span>Прайс-лист</span>
                  <img src={priceListIcon} alt="Price list icon"/>
                </button>
              </div>
            </div>
            <p className="footer__info">
              Компания «Султан» — снабжаем розничные магазины товарами
              "под ключ" в Кокчетаве и Акмолинской области
            </p>
            <form className="footer__form">
              <p className="footer__form-label">Подпишись на скидки и акции</p>
              <div className="footer__form-div">
                <input type="email" name="email" placeholder="Введите ваш E-mail" className="footer__input"/>
                <button className="footer__arrow-btn">
                  <img src={arrowRightIcon} alt="Arrow right icon" className="footer__arrow-icon"/>
                </button>
              </div>
            </form>
          </div>
          <div className="footer__box2">
            <h5 className="footer__subtitle">Меню сайта:</h5>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">О компании</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Доставка и оплата</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Возврат</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="footer__box3">
            <h5 className="footer__subtitle">Категории:</h5>
            <ul className="footer__list">
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Бытовая химия</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Косметика и гигиена</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Товары для дома</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Товары для детей и мам</Link>
              </li>
              <li className="footer__list-item">
                <Link to={'/'} className="footer__list-link">Посуда</Link>
              </li>
            </ul>
          </div>
          <div className="footer__box4">
            <h5 className="footer__subtitle">Скачать прайс-лист:</h5>
            <button className="footer__price-list-btn">
              <span>Прайс-лист</span>
              <img src={priceListIcon} alt="Price list icon"/>
            </button>
            <div className="footer__social">
              <p className="footer__social-text">Связь в мессенджерах:</p>
              <img src={whatsAppIcon} alt="WhatsApp icon" className="footer__whatsApp"/>
              <img src={telegramIcon} alt="Telegram icon" className="footer__telegram"/>
            </div>
          </div>
          <div className="footer__box5">
            <h5 className="footer__subtitle">Контакты:</h5>
            <div className="contacts footer__contacts">
              <p className="contacts__num">+7 (777) 490-00-91</p>
              <p className="contacts__schedule">время работы: 9:00-20:00</p>
              <Link to={'/'} className="contacts__link">Заказать звонок</Link>
            </div>
            <div className="info footer__info-email">
              <p className="info__bold">opt.sultan@mail.ru</p>
              <p className="info__regular">На связи в любое время</p>
            </div>
            <div className="footer__pay-options">
              <img src={visa} alt="Visa" className="footer__visa"/>
              <img src={mastercard} alt="Mastercard" className="footer__mastercard"/>
            </div>
          </div>
          <div className="footer__social-hidden">
            <p className="footer__social-text">Связь в мессенджерах:</p>
            <img src={whatsAppIcon} alt="WhatsApp icon" className="footer__whatsApp"/>
            <img src={telegramIcon} alt="Telegram icon" className="footer__telegram"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;