import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemService from '../Services/ItemService';
import style from './ItemUpdate.css'

const ItemUpdate = () => {

  const location = useLocation();
  const item = location.state;

  const history = useNavigate();

  const [model, setModel] = useState(item.model);
  const [company, setCompany] = useState(item.company);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const uItem = {item_id:item.item_id, model:model, company:company, price:price}
      const response = await ItemService.updateItem(item.item_id, uItem);
    if ( response.status == 200 ){
      alert(response.data)
      history('/item/detail', {state: response.data})
    }
    else{
      console.log(response.error)
    }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-item">
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item ID:</label>
          <span>{item.item_id}</span>
        </div>
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default ItemUpdate;