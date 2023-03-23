import React from 'react';
import Header from "../Header/Header";

const Layout: React.FC<React.PropsWithChildren>  = ({children}) => {
  return (
    <>
      <Header/>
    </>
  );
};

export default Layout;