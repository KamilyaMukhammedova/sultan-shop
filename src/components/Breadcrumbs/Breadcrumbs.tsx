import React from 'react';
import { Link } from "react-router-dom";
import './Breadcrumbs.scss';

interface Info {
  path: string,
  name: string
}

interface IProps {
   infoArr: Info[]
}

const Breadcrumbs: React.FC<IProps> = (props) => {
  return (
    <div className="breadcrumbs">
      <Link to={'/'} className="breadcrumbs__link">Главная</Link>
      {props.infoArr.map((item, index) => (
        <Link
          key={index}
          to={`/${item.path}`}
          className={`breadcrumbs__link ${index === props.infoArr.length - 1 && 'breadcrumbs__active'}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;