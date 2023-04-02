import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { FILTER_TYPES_LIST } from "../../constants";
import { Product } from "../../types/products";
import Spinner from "../../components/ui/Spinner/Spinner";
import ErrorMsg from "../../components/ui/ErrorMsg/ErrorMsg";
import arrowDownIcon from "../../assets/icons/arrow-down-icon.png";
import arrowUpIcon from "../../assets/icons/arrow-up-icon.png";
import './NewProduct.scss';

const filterTypesArray = FILTER_TYPES_LIST.map(type => {
  return {[type]: false};
});

const NewProduct: React.FC = () => {
  const {oneProduct, createProductError, createProductLoading, editProductLoading, editProductError} =
    useTypedSelector((state) => state.products)
  ;

  const {createNewProduct, fetchOneProductFromApi, editProduct} = useActions();
  const navigate = useNavigate();
  const {id} = useParams() as {id: string};

  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: '',
    brand: '',
    producer: '',
    barcode: '',
    sizeType: '',
    size: 0,
    image: '',
    price: 0,
    description: ''
  });

  const [types, setTypes] = useState([...filterTypesArray]);

  const [typesShowed, setTypesShowed] = useState(true);

  const toggleTypesList = () => {
    setTypesShowed(prevState => !prevState);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checkedTypes =
      types.filter(type => Object.values(type)[0]).map(item => Object.keys(item)[0])
    ;

    const productData: Product = {
      image: form.image,
      name: form.name,
      brand: form.brand,
      producer: form.producer,
      barcode: +form.barcode,
      price: +form.price,
      size: +form.size,
      sizeType: form.sizeType,
      description: form.description,
      type: checkedTypes
    };

    if(!editMode) {
      await createNewProduct(productData);
    } else {
      await editProduct(productData, id);
    }

    if(!createProductError) {
      navigate('/');
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm(prevState => (
      {
        ...prevState,
        [name]: value
      }
    ));
  };

  const onTypeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const valueAsName = event.target.value;

    const copyState = types.map(item => {
      if (Object.keys(item)[0] === valueAsName) {
        return {
          [valueAsName]: checked
        }
      }
      return item;
    });

    setTypes(copyState);
  };

  const onDisabled = () => {
    return !Boolean(
      form.name && form.brand && form.producer && form.barcode &&
      form.image && form.sizeType && form.size && form.description && form.price
    );
  };

  const fetchOneProductData = useCallback(async () => {
    if(id) {
      await fetchOneProductFromApi(id);

      if(oneProduct) {
        const typesArrCopy = types.map(type => {
          if(oneProduct.type.includes(Object.keys(type)[0])) {
            return {
              [Object.keys(type)[0]]: true
            };
          }
          return type;
        });

        setForm({
          name: oneProduct.name,
          brand: oneProduct.brand,
          producer: oneProduct.producer,
          barcode: oneProduct.barcode.toString(),
          sizeType: oneProduct.sizeType,
          size: oneProduct.size,
          image: oneProduct.image,
          price: oneProduct.price,
          description: oneProduct.description
        });

        setTypes(typesArrCopy);
        setEditMode(true);
      }
    }
  }, [id]);


  useEffect(() => {
    void fetchOneProductData();
  }, [id, fetchOneProductData]);

  return (
    <div className="new-product">
      <h1 className="new-product__title">{!editMode ? 'Новый товар' : 'Редактировать товар'}</h1>
      <form className="new-product__form" onSubmit={onSubmit}>
        <div className="new-product__form-group">
          <label htmlFor="name">Название*</label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Введите название товара"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="brand">Бренд*</label>
          <div>
            <input
              type="text"
              id="brand"
              name="brand"
              value={form.brand}
              placeholder="Введите название бренда"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="producer">Производитель*</label>
          <div>
            <input
              type="text"
              id="producer"
              name="producer"
              value={form.producer}
              placeholder="Введите название производителя"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="barcode">Штрихкод*</label>
          <div>
            <input
              type="text"
              id="barcode"
              name="barcode"
              value={form.barcode}
              placeholder="Введите штрихкод"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="sizeType">Тип размера*</label>
          <div>
            <select
              name="sizeType"
              id="sizeType"
              required
              value={form.sizeType}
              onChange={onInputChange}
            >
              <option value="" disabled>Выберите тип размера:</option>
              <option value="volume">Объем</option>
              <option value="weight">Вес</option>
            </select>
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="size">Размер*</label>
          <div>
            <input
              type="number"
              id="size"
              name="size"
              min={0}
              value={form.size}
              placeholder="Введите размер"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="price">Цена*</label>
          <div>
            <input
              type="number"
              id="price"
              name="price"
              min={0}
              value={form.price}
              placeholder="Введите цену"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="image">Изображение*</label>
          <div>
            <input
              type="url"
              id="image"
              name="image"
              value={form.image}
              placeholder="Введите адрес изображения"
              required
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="new-product__form-group">
          <label onClick={toggleTypesList} className="new-product__type-label">
            Тип ухода*
            <img
              src={!typesShowed ? arrowDownIcon : arrowUpIcon}
              alt="Arrow icon"
            />
          </label>
          <section className={typesShowed ? 'show' : 'hide'}>
            {FILTER_TYPES_LIST.map((type, index) => (
              <p key={index}>
                <input
                  type="checkbox"
                  name="type"
                  value={type}
                  checked={types[index][type]}
                  className="new-product__checkbox"
                  onChange={onTypeCheckbox}
                />
                <span>{type}</span>
              </p>
            ))}
          </section>
        </div>
        <div className="new-product__form-group">
          <label htmlFor="description">Описание*</label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            cols={30} rows={10}
            placeholder="Введите описание"
            required
            onChange={onInputChange}
          />
        </div>
        {
          createProductLoading || editProductLoading ?
          <Spinner/> :
          <button type="submit" className="new-product__form-btn-sbm" disabled={onDisabled()}>
            {!editMode ? 'Добавить' : 'Редактировать'}
          </button>
        }
      </form>
      {createProductError && <ErrorMsg message={createProductError}/>}
      {editProductError && <ErrorMsg message={editProductError}/>}
    </div>
  );
};

export default NewProduct;