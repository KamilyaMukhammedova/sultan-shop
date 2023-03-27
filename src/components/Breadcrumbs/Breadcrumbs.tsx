import React from 'react';
import { NavLink } from "react-router-dom";
import './Breadcrumbs.scss';

const Breadcrumbs: React.FC = () => {
  return (
    <div className="breadcrumbs">
      <NavLink to={'/'}>Главная</NavLink>
      <NavLink to={'/'}>Каталог</NavLink>
    </div>
  );
};

export default Breadcrumbs;