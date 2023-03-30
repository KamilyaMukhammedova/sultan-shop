import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FILTER_LIST } from "../../constants";
import Spinner from "../ui/Spinner/Spinner";
import searchIcon from "../../assets/search-icon.png";
import arrowDownIcon from "../../assets/arrow-down-icon.png";
import trashIcon from "../../assets/trash-icon.png";
import './Sidebar.scss';
import { useActions } from "../../hooks/useActions";

const Sidebar: React.FC = () => {
  const producers = useTypedSelector((state) => state.products.producers);
  const fetchLoading = useTypedSelector((state) => state.products.fetchLoading);
  const {filterProducts} = useActions();


  const [priceFilter, setPriceFilter] = useState({
    priceFrom: 0,
    priceTo: 10000
  });

  const [producersFilter, setProducersFilter] = useState<{ [key: string]: boolean }>({});

  const onPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setPriceFilter((prevState => ({
      ...prevState,
      [name]: value
    })));
  };

  const onProducerCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueAsKeyName = event.target.value;
    const checked = event.target.checked;

    setProducersFilter((prevState => ({
      ...prevState,
      [valueAsKeyName]: checked
    })));
  };

  const onShowResultsBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const producersObj = Object.fromEntries(Object.entries(producersFilter)
      .filter(([key]) => producersFilter[key]))
    ;
    const producersNamesArray = Object.keys(producersObj);

    if(+priceFilter.priceFrom <= +priceFilter.priceTo) {
      filterProducts(+priceFilter.priceFrom, +priceFilter.priceTo, producersNamesArray);
    } else {
      filterProducts(+priceFilter.priceTo, +priceFilter.priceFrom, producersNamesArray);
    }
  };


  useEffect(() => {
    const producersChecked: { [key: string]: boolean } = {};

    producers && Object.keys(producers).forEach((item) => {
      if (!producersChecked.hasOwnProperty(item)) {
        producersChecked[item] = false;
      }
    });

    setProducersFilter(producersChecked);
    }, [producers]);

  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Подбор по параметрам</h3>
      <p className="sidebar__price-label">Цена <span className="sidebar__KZT">₸</span></p>
      <div className="sidebar__price-filter">
        <input
          type="number"
          name="priceFrom"
          className="sidebar__price-input"
          min="0"
          value={priceFilter.priceFrom}
          onChange={onPriceChange}
        />
        <span>-</span>
        <input
          type="number"
          name="priceTo"
          className="sidebar__price-input"
          min="0"
          value={priceFilter.priceTo}
          onChange={onPriceChange}
        />
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
                onChange={onProducerCheck}
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
        <button
          type="button"
          className="sidebar__show-results-btn"
          onClick={onShowResultsBtn}
        >
          Показать
        </button>
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