import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { useActions } from "./hooks/useActions";
import Layout from "./components/Layout/Layout";
import Catalog from "./containers/Catalog/Catalog";
import OneProduct from "./containers/OneProduct/OneProduct";
import Basket from "./containers/Basket/Basket";

const App: React.FC = () => {
  const {fetchProductsFromApi} = useActions();

  useEffect(() => {
    fetchProductsFromApi();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={(<Catalog/>)}/>
        <Route path={'/product/:id'} element={(<OneProduct/>)}/>
        <Route path={'/basket'} element={(<Basket/>)}/>
        <Route path={'*'} element={(<h1>Page not found</h1>)}/>
      </Routes>
    </Layout>
  );
};

export default App;