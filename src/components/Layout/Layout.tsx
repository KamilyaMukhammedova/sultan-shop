import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <Header/>
      <main className="container">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;