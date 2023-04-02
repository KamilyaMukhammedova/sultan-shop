import React, { useEffect, useState } from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ReactPaginate from "react-paginate";
import CatalogTop from "../../components/CatalogTop/CatalogTop";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/ui/Spinner/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg/ErrorMsg";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import arrowPrevIcon from "../../assets/icons/arrow-prev.png";
import arrowNextIcon from "../../assets/icons/arrow-next.png";
import './Catalog.scss';
import { useActions } from "../../hooks/useActions";

const Catalog: React.FC = () => {
  const {products, fetchLoading, fetchError} = useTypedSelector((state) => state.products);
  const {fetchProductsFromApi} = useActions();

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const breadCrumbs = [{path: '', name: 'Каталог'}];

  let productsCards = null;

  if (fetchLoading) {
    productsCards = <Spinner/>;
  }

  if (fetchError) {
    productsCards = <ErrorMsg message={fetchError}/>;
  }

  if (!fetchError && !fetchLoading && products.length > 0) {
    productsCards = currentItems.map(item => (
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
  } else {
    productsCards = <p className="info-msg">Нет товаров</p>;
  }

  useEffect(() => {
    fetchProductsFromApi();
  }, []);

  return (
    <div className="catalog">
      <Breadcrumbs infoArr={breadCrumbs}/>
      <CatalogTop/>
      <div className="catalog__inner">
        <Sidebar/>
        <div className="catalog__main-content">
          <section className="catalog__cards-div">
            {productsCards}
          </section>
          {products.length > 0 &&
              <div className="catalog__pagination">
                  <ReactPaginate
                      activeClassName="pagination__active"
                      breakLabel="..."
                      nextLabel={<img src={arrowNextIcon} alt="Next"/>}
                      previousLabel={<img src={arrowPrevIcon} alt="Previous"/>}
                      containerClassName="pagination"
                      pageCount={pageCount}
                      onPageChange={handlePageClick}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      pageClassName="pagination__page"
                      nextClassName="pagination__next"
                      previousClassName="pagination__prev"
                  />
              </div>
          }
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