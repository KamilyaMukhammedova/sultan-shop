import React, { useEffect } from 'react';
import SingleProductCard from "../../components/SingleProductCard/SingleProductCard";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Spinner from "../../components/ui/Spinner/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg/ErrorMsg";

const OneProduct: React.FC = () => {
  const {id} = useParams();

  const {oneProduct, oneProductFetchLoading, oneProductFetchError} =
    useTypedSelector((state) => state.products)
  ;

  const {fetchOneProductFromApi} = useActions();

  useEffect(() => {
    id && fetchOneProductFromApi(id);
  }, [id]);

  let productInfo = null;

  if (oneProductFetchLoading) {
    productInfo = <Spinner/>;
  }

  if (oneProductFetchError) {
    productInfo = <ErrorMsg message={oneProductFetchError}/>;
  }

  if(!oneProductFetchError && !oneProductFetchLoading && oneProduct && id) {
    productInfo = (
      <SingleProductCard
        image={oneProduct.image}
        name={oneProduct.name}
        sizeType={oneProduct.sizeType}
        description={oneProduct.description}
        size={oneProduct.size}
        barcode={oneProduct.barcode}
        producer={oneProduct.producer}
        brand={oneProduct.brand}
        price={oneProduct.price}
        type={oneProduct.type}
      />
    );
  }

  return (
    <>
      {productInfo}
    </>
  );
};

export default OneProduct;