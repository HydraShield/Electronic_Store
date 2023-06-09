import React, { useState } from 'react';
import style from './ItemPost.css'
import ItemService from '../Services/ItemService';

const ItemPost = () => {
  const [model, setModel] = useState('');
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    const newItem = {
      model,
      company,
      price
    };

    console.log(newItem)
    const response = await ItemService.addItem(newItem);
    if ( response.status == 200 ){
      alert(response.data)
    }
    else{
      console.log(response.error)
    }
    

    setModel('');
    setCompany('');
    setPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-item">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
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
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ItemPost;
