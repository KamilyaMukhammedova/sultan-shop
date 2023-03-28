import React from 'react';
import './CatalogTop.scss';
import { FILTER_LIST } from "../../constants";

const CatalogTop: React.FC = () => {
  return (
    <section className="catalog-top">
      <div className="catalog-top__box1">
        <h1 className="catalog-top__title">Косметика и гигиена</h1>
        <div className="catalog-top__sorting">
          <label htmlFor="sorting" className="catalog-top__label">Сортировка:</label>
          <select id="sorting" name="sorting" className="catalog-top__select" value="">
            <option value="" disabled className="catalog-top__option">Название</option>
            <option value="name min" className="catalog-top__option">Название (а-я)</option>
            <option value="name max" className="catalog-top__option">Название (я-а)</option>
            <option value="price min" className="catalog-top__option">Цена (мин-макс)</option>
            <option value="price max" className="catalog-top__option">Цена (макс-мин)</option>
          </select>
        </div>
      </div>
      <ul className="catalog-top__filter-list">
        {FILTER_LIST.map((item, index) => {
          if (index < 4) {
            return <li key={index} className="catalog-top__filter-item catalog-top_filter1">{item}</li>
          }
          return <li key={index} className="catalog-top__filter-item catalog-top_filter2">{item}</li>
        })}
      </ul>
    </section>
  );
};

export default CatalogTop;