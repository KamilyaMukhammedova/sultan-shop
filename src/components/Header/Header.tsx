import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import MiniBasket from "../MiniBasket/MiniBasket";
import locationIcon from '../../assets/icons/location-icon.png';
import mailIcon from '../../assets/icons/mail-icon.png';
import catalogIcon from '../../assets/icons/catalog-icon.png';
import catalogGreyIcon from '../../assets/icons/catalog-grey-icon.png';
import searchIcon from '../../assets/icons/search-icon.png';
import searchGreyIcon from '../../assets/icons/search-grey-icon.png';
import priceListIcon from '../../assets/icons/price-list-icon.png';
import menuIcon from '../../assets/icons/menu-icon.png';
import logo from '../../assets/logo-grey.png';
import callCenter from '../../assets/call-center.png';
import './Header.scss';

const Header: React.FC = () => {
  const {isAdminMode} = useTypedSelector((state) => state.mode);
  const {manageMode} = useActions();
  const navigate = useNavigate();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  const setMode = () => {
    manageMode(!isAdminMode);
    if (isAdminMode) {
      navigate('/');
    }
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  });

  return (
    <header className="header">
      <section className={`header__top ${menuIsOpen || window.innerWidth > 768 ? 'show' : 'hide'}`}>
        <div className="container">
          <div className="header__top-inner">
            <div className="header__top-box">
              <div className="header__top-box-inner header__top-box-border">
                <img src={locationIcon} alt="Location icon"/>
                <div className="info header__info">
                  <p className="info__bold info_bold-black">г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                  <p className="info__regular">(Рынок Восточный)</p>
                </div>
              </div>
              <div className="header__top-box-inner">
                <img src={mailIcon} alt="Mail icon"/>
                <div className="info header__info">
                  <p className="info__bold info_bold-black">opt.sultan@mail.ru</p>
                  <p className="info__regular">На связи в любое время</p>
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
                <li className="header__nav-item header__nav-user" onClick={setMode}>
                  <span>{isAdminMode ? 'Админ' : 'Пользователь'}</span>
                </li>
                {isAdminMode &&
                    <li className="header__nav-item header__nav-user">
                        <NavLink to={'/new-product'} className="header__link">Добавить товар</NavLink>
                    </li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <div className="header__divider header_divider1"/>
      <section className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <div className="header__bottom-box1">
              <button type="button" className="header__menu-btn" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu icon"/>
              </button>
              <NavLink to={'/'} className="header__link">
                <img src={logo} alt="Logo" className="header__logo-img"/>
              </NavLink>
              <div className="header__basket-hidden">
                <Link to={'/basket'} className="header__link">
                  <MiniBasket/>
                </Link>
              </div>
            </div>
            <div className="header__divider header__divider-hidden"/>
            <div className="header__bottom-inner2">
              <div className="header__bottom-box2">
                <button className="header__btn">
                  <img src={catalogGreyIcon} alt="Catalog grey icon"
                       className="header__catalog-grey"
                  />
                  <span>Каталог</span>
                  <img src={catalogIcon} alt="Catalog icon" className="header__catalog"/>
                </button>
              </div>
              <form className="header__bottom-search-form">
                <div className="header__bottom-search-div">
                  <input type="text" name="search" placeholder="Поиск..."/>
                  <button className="header__bottom-search-btn">
                    <img src={searchIcon} alt="Search icon" className="header__search"/>
                    <img src={searchGreyIcon} alt="Search grey icon"
                         className="header__search-grey"
                    />
                  </button>
                </div>
              </form>
              <div className="header__bottom-box3">
                <div className="header__bottom-box3-inner">
                  <div className="contacts header__contacts">
                    <p className="contacts__num contacts_num-black">+7 (777) 490-00-91</p>
                    <p className="contacts__schedule">время работы: 9:00-20:00</p>
                    <Link to={'/'} className="contacts__link">Заказать звонок</Link>
                  </div>
                </div>
                <img src={callCenter} alt="Operator"/>
              </div>
              <div className="header__bottom-box4">
                <button className="header__btn">
                  <span>Прайс-лист</span>
                  <img src={priceListIcon} alt="Price list icon"/>
                </button>
              </div>
              <div className="header__bottom-box5">
                <Link to={'/basket'} className="header__link" data-testid={'basket-link'}>
                  <MiniBasket/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="header__divider"/>
    </header>
  );
};

export default Header;