import React from 'react';
import './Sidebar.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import searchIcon from "../../assets/search-icon.png";
import arrowDownIcon from "../../assets/arrow-down-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import Spinner from "../ui/Spinner/Spinner";
import { FILTER_LIST } from "../../constants";

const Sidebar: React.FC = () => {
  const producers = useTypedSelector((state) => state.products.producers);
  const fetchLoading = useTypedSelector((state) => state.products.fetchLoading);

  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Подбор по параметрам</h3>
      <p className="sidebar__price-label">Цена <span className="sidebar__KZT">₸</span></p>
      <div className="sidebar__price-filter">
        <input type="number" id="price-from" className="sidebar__price-input" min="0"/>
        <span>-</span>
        <input type="number" id="price-to" className="sidebar__price-input" min="0"/>
      </div>
      <div className="sidebar__producer-filter">
        <h5 className="sidebar__mini-title">Производитель</h5>
        <form className="sidebar__producer-search-form">
          <div className="sidebar__producer-search-div">
            <input type="text" name="search" placeholder="Поиск..." className="sidebar__producer-search-input"/>
            <button className="sidebar__producer-search-btn">
              <img src={searchIcon} alt="Search icon" className="sidebar__producer__search-icon"/>
            </button>
          </div>
        </form>
        {fetchLoading ? <Spinner/> :
          producers && Object.keys(producers).map((keyName, index) => (
          <div className="sidebar__producer-checkbox-div" key={index}>
            <input
              type="checkbox"
              name="producer"
              value={keyName}
              className="sidebar__producer-checkbox-input"
            />
            <span>{keyName}</span>
            <span className="sidebar__producer-amount">({producers[keyName]})</span>
          </div>
        ))}
        <div className="sidebar__show-all">
          <span className="sidebar__show-all-text">Показать все</span>
          <img src={arrowDownIcon} alt="Arrow down icon"/>
        </div>
      </div>
      <div className="sidebar__show-results-div">
        <button type="button" className="sidebar__show-results-btn">Показать</button>
        <button type="button" className="sidebar__show-results-remove-btn">
          <img src={trashIcon} alt="Trash icon"/>
        </button>
      </div>
      <ul className="sidebar__filter-list">
        {FILTER_LIST.map((item, index) => (
          <li key={index} className="sidebar__filter-list-item">{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;