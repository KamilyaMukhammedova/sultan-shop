import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import CatalogTop from "../../components/CatalogTop/CatalogTop";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
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
      <div className="catalog__inner">
        <Sidebar/>
        <section className="catalog__cards-div">
          {products.map(item => (
            <ProductCard
              key={item.barcode}
              image={item.image}
              name={item.name}
              sizeType={item.sizeType}
              size={item.size}
              barcode={item.barcode}
              producer={item.producer}
              brand={item.brand}
              price={item.price}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Catalog;