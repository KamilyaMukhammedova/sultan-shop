import React, { useEffect } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import CatalogTop from "../../components/CatalogTop/CatalogTop";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/ui/Spinner/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg/ErrorMsg";
import './Catalog.scss';

const Catalog: React.FC = () => {
  const {products, fetchLoading, fetchError} = useTypedSelector((state) => state.products);

  const {fetchProductsFromApi} = useActions();

  useEffect(() => {
    fetchProductsFromApi();
  }, []);

  let productsCards = null;

  if (fetchLoading) {
    productsCards = <Spinner/>;
  }

  if (fetchError) {
    productsCards = <ErrorMsg message={fetchError}/>;
  }

  if (!fetchError && !fetchLoading && products.length > 0) {
    productsCards = products.map(item => (
        <ProductCard
          key={item.barcode}
          id={item.id}
          image={item.image}
          name={item.name}
          sizeType={item.sizeType}
          size={item.size}
          barcode={item.barcode}
          producer={item.producer}
          brand={item.brand}
          price={item.price}
        />
      )
    );
  }

  return (
    <div className="catalog">
      <CatalogTop/>
      <div className="catalog__inner">
        <Sidebar/>
        <div className="catalog__main-content">
          <section className="catalog__cards-div">
            {productsCards}
          </section>
          <div className="catalog__pagination">Pagination will be here</div>
          <p className="catalog__bottom-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo,
            vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.
            Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis.
            Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Catalog;