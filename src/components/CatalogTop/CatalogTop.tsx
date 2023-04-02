import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { FILTER_TYPES_LIST } from "../../constants";
import './CatalogTop.scss';

const CatalogTop: React.FC = () => {
  const {filterTypeName} = useTypedSelector((state) => state.products);
  const {sortProducts, filterProductsByType, fetchProductsFromApi} = useActions();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    sortProducts(value);
  };

  const onFilterByType = (type: string) => {
   filterProductsByType(type);
  };

  const refreshCatalog = () => {
    fetchProductsFromApi();
  };

  return (
    <section className="catalog-top">
      <div className="catalog-top__box1">
        <h1 className="catalog-top__title" onClick={refreshCatalog}>Косметика и гигиена</h1>
        <div className="catalog-top__sorting">
          <label htmlFor="sorting" className="catalog-top__label">Сортировка:</label>
          <select
            id="sorting"
            name="sorting"
            className="catalog-top__select"
            defaultValue=""
            onChange={selectChange}
          >
            <option disabled value="" className="catalog-top__option">Выбрать</option>
            <option value="A-Z" className="catalog-top__option">Название (а-я)</option>
            <option value="Z-A" className="catalog-top__option">Название (я-а)</option>
            <option value="min-max" className="catalog-top__option">Цена (мин-макс)</option>
            <option value="max-min" className="catalog-top__option">Цена (макс-мин)</option>
          </select>
        </div>
      </div>
      <ul className="catalog-top__filter-list">
        {FILTER_TYPES_LIST.map((type, index) => (
          <li
            key={index}
            className={`catalog-top__filter-item 
            ${index < 4 ? 'catalog-top_filter1' : 'catalog-top_filter2'}
            ${filterTypeName === type && 'active-type'}
            `}
            onClick={() => onFilterByType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CatalogTop;