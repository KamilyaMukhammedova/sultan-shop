import React from 'react';
import volumeIcon from "../../assets/icons/volume-icon.png";
import weightIcon from "../../assets/icons/weight-icon.png";
import './Size.scss';

interface IProps {
  sizeType: string,
  size: number
}

const Size: React.FC<IProps> = ({sizeType, size}) => {
  return (
    <div className="size">
      <img
        src={sizeType === 'volume' ? volumeIcon : weightIcon}
        alt="Size type icon"
        className="size__type-icon"
      />
      <span className="size__text">{size}</span>
      <span className="size__text">
          {sizeType === 'volume' ? 'мл' : 'г'}
        </span>
    </div>
  );
};

export default Size;