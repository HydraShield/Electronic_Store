import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemService from '../Services/ItemService';
import style from './ItemUpdate.css'
import StockService from '../Services/StockService';

const StockUpdate = () => {

  const location = useLocation();
  const item = location.state;
  const stock = item.item_stock;

  const history = useNavigate();

  const [current, setModel] = useState(stock.current);
  const [ordered, setCompany] = useState(stock.ordered);
  const [deliver, setPrice] = useState(stock.deliver);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const uItem = {item_id:item.item_id, current: current, ordered: ordered, deliver: deliver}
      const response = await StockService.updateStock(item.item_id, uItem);
      const response1 = await ItemService.getItemById(response.data.item_id)
    if ( response.status == 200 ){
      alert("Stock Updated")
      history('/item/detail', {state: response1.data})
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
      <h1>Update Stock</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item ID: </label>
          <span>{item.item_id}</span>
        </div>
        <div className="form-group">
          <label>Item Model: </label>
          <span>{item.model}</span>
        </div>
        <div className="form-group">
          <label>Current Stock:</label>
          <input
            type="number"
            value={current}
            onChange={(e) => setModel(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Ordered Stock:</label>
          <input
            type="number"
            value={ordered}
            onChange={(e) => setCompany(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>To Deliver:</label>
          <input
            type="number"
            value={deliver}
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

export default StockUpdate;