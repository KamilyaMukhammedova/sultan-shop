import React, { useEffect } from 'react';
import CatalogTop from "../../components/CatalogTop/CatalogTop";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import './Catalog.scss';
import Sidebar from "../../components/Sidebar/Sidebar";

const Catalog: React.FC = () => {
  const products = useTypedSelector((state) => state.products.products);
  const fetchLoading = useTypedSelector((state) => state.products.fetchLoading);
  const fetchError = useTypedSelector((state) => state.products.fetchError);
  const {fetchProductsFromApi} = useActions();

  useEffect(() => {
    fetchProductsFromApi();
    console.log(products);
  }, []);

  return (
    <div className="catalog">
      <CatalogTop/>
      <div className="catalog__inner">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Catalog;