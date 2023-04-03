import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { FILTER_TYPES_LIST } from "../../constants";
import Spinner from "../ui/Spinner/Spinner";
import searchIcon from "../../assets/icons/search-icon.png";
import arrowDownIcon from "../../assets/icons/arrow-down-icon.png";
import arrowUpIcon from "../../assets/icons/arrow-up-icon.png";
import trashIcon from "../../assets/icons/trash-icon.png";
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const {producers, filterTypeName, fetchLoading} = useTypedSelector((state) => state.products);
  const {filterProducts, filterProducers, refreshProducts, refreshProducers, filterProductsByType} = useActions();

  const [priceFilter, setPriceFilter] = useState({
    priceFrom: 0,
    priceTo: 10000
  });

  const [producersFilter, setProducersFilter] = useState<{ [key: string]: boolean }>({});

  const [producerSearch, setProducerSearch] = useState('');

  const [producersFullListShowed, setProducersFullListShowed] = useState(false);

  useEffect(() => {
    const producersChecked: { [key: string]: boolean } = {};

    producers && Object.keys(producers).forEach((item) => {
      if (!producersChecked.hasOwnProperty(item)) {
        producersChecked[item] = false;
      }
    });

    setProducersFilter(producersChecked);
  }, [producers]);

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

  const onShowResultsBtn = () => {
    const producersObj = Object.fromEntries(Object.entries(producersFilter)
      .filter(([key]) => producersFilter[key]))
    ;
    const producersNamesArray = Object.keys(producersObj);

    if (+priceFilter.priceFrom <= +priceFilter.priceTo) {
      filterProducts(+priceFilter.priceFrom, +priceFilter.priceTo, producersNamesArray);
    } else {
      filterProducts(+priceFilter.priceTo, +priceFilter.priceFrom, producersNamesArray);
    }
  };

  const onProducerSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProducerSearch(event.target.value);
  };

  const onProducerSearchBtn = () => {
    if (producerSearch) {
      filterProducers(producerSearch);
    }
  };

  const onRemoveFilter = () => {
    refreshProducts();
    refreshProducers();

    setPriceFilter({
      priceFrom: 0,
      priceTo: 10000
    });

    setProducerSearch('');
  };

  const toggleProducers = () => {
    setProducersFullListShowed(prevState => !prevState);
  };

  const onFilterByType = (type: string) => {
    filterProductsByType(type);
  };

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
            <input
              type="text"
              name="producerSearch"
              value={producerSearch}
              placeholder="Поиск..."
              className="sidebar__producer-search-input"
              onChange={onProducerSearchInput}
            />
            <button type="button" className="sidebar__producer-search-btn" onClick={onProducerSearchBtn}>
              <img src={searchIcon} alt="Search icon" className="sidebar__producer__search-icon"/>
            </button>
          </div>
        </form>
        {fetchLoading ? <Spinner/> :
          producers && Object.keys(producers).map((keyName, index) => (
            <div
              className={
                `sidebar__producer-checkbox-div 
              ${!producersFullListShowed && index > 2 ? 'hide' : 'show'}
              `
              }
              key={index}
            >
              <input
                type="checkbox"
                name="producer"
                value={keyName}
                checked={producersFilter[keyName] || false}
                className="sidebar__producer-checkbox-input"
                onChange={onProducerCheck}
              />
              <span>{keyName}</span>
              <span className="sidebar__producer-amount">({producers[keyName]})</span>
            </div>
          ))}
        {
          JSON.stringify(producers) !== '{}' ?
            <div className="sidebar__show-all" onClick={toggleProducers}>
          <span className="sidebar__show-all-text">
            {!producersFullListShowed ? 'Показать все' : 'Скрыть'}
          </span>
              <img
                src={!producersFullListShowed ? arrowDownIcon : arrowUpIcon}
                alt="Arrow down icon"
              />
            </div> :
            <p>Нет результатов</p>
        }
      </div>
      <div className="sidebar__show-results-div">
        <button
          type="button"
          className="sidebar__show-results-btn"
          onClick={onShowResultsBtn}
        >
          Показать
        </button>
        <button type="button" className="sidebar__show-results-remove-btn" onClick={onRemoveFilter}>
          <img src={trashIcon} alt="Trash icon"/>
        </button>
      </div>
      <ul className="sidebar__filter-list">
        {FILTER_TYPES_LIST.map((type, index) => (
          <li
            key={index}
            className={`sidebar__filter-list-item ${filterTypeName === type && 'active-type'}`}
            onClick={() => onFilterByType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
