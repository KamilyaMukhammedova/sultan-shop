import React, { useEffect } from 'react';
import CatalogTop from "../../components/CatalogTop/CatalogTop";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import './Catalog.scss';

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
    </div>
  );
};

export default Catalog;