import React from 'react';
import {NavLink} from "react-router-dom";
import locationIcon from '../../assets/location-icon.png';
import mailIcon from '../../assets/mail-icon.png';
import catalogIcon from '../../assets/catalog-icon.png';
import searchIcon from '../../assets/search-icon.png';
import priceListIcon from '../../assets/price-list-icon.png';
import logo from '../../assets/logo-grey.png';
import callCenter from '../../assets/call-center.png';
import Basket from "../Basket/Basket";
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <div className="header__top-box">
              <div className="header__top-box-inner header__top-box-border">
                <img src={locationIcon} alt="Location icon"/>
                <div className="header__top-info">
                  <p className="header__top-bold">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                  <p className="header__top-regular">(Рынок Восточный)</p>
                </div>
              </div>
              <div className="header__top-box-inner">
                <img src={mailIcon} alt="Mail icon"/>
                <div className="header__top-info">
                  <p className="header__top-bold">opt.sultan@mail.ru</p>
                  <p className="header__top-regular">На связи в любое время</p>
                </div>
              </div>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavLink to={'/'} className="header__link">О компании</NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={'/'} className="header__link">Доставка и оплата</NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={'/'} className="header__link">Возврат</NavLink>
                </li>
                <li className="header__nav-item">
                  <NavLink to={'/'} className="header__link">Контакты</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="header__divider"/>
      <section className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <div className="header__bottom-box1">
              <NavLink to={'/'} className="header__link">
                <img src={logo} alt="Logo"/>
              </NavLink>
            </div>
            <div className="header__bottom-box2">
              <button className="header__btn">
                <span>Каталог</span>
                <img src={catalogIcon} alt="Catalog icon"/>
              </button>
            </div>
            <form className="header__bottom-search-form">
              <div className="header__bottom-search-div">
                <input type="text" name="search" placeholder="Поиск..."/>
                <button className="header__bottom-search-btn">
                  <img src={searchIcon} alt="Search icon"/>
                </button>
              </div>
            </form>
            <div className="header__bottom-box3">
              <div className="header__bottom-box3-inner">
                <p className="header__bottom-box3-num">+7 (777) 490-00-91</p>
                <p className="header__bottom-box3-schedule">время работы: 9:00-20:00</p>
                <a href="#" className="header__bottom-box3-link">Заказать звонок</a>
              </div>
              <img src={callCenter} alt="Operator"/>
            </div>
            <div className="header__bottom-box4">
              <button className="header__btn">
                <span>Прайс-лист</span>
                <img src={priceListIcon} alt="Price list icon"/>
              </button>
            </div>
            <Basket/>
          </div>
        </div>
      </section>
      <div className="header__divider"/>
    </header>
  );
};

export default Header;