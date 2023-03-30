import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Catalog from "./containers/Catalog/Catalog";
import OneProduct from "./containers/OneProduct/OneProduct";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={(<Catalog/>)}/>
        <Route path={'/product/:id'} element={(<OneProduct/>)}/>
        <Route path={'*'} element={(<h1>Page not found</h1>)}/>
      </Routes>
    </Layout>
  );
};

export default App;