import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from "./ItemDetails.css"
import ItemService from '../Services/ItemService';
import StockService from '../Services/StockService';

const ItemDetails = () => {
const location = useLocation();
  const item = location.state;

  const history = useNavigate();
  console.log(item)

  const handleDelete = async (id) => {
    try {
      const response = await ItemService.deleteItem(id);
      if ( response.status == 200 ){
        alert(response.data)
        history('/items')
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRecive = async (id) => {
    try {
      const x = item.item_stock.current;
      const y = item.item_stock.ordered;
      const uItem = {item_id: id, ...item.item_stock, current: x+y, ordered: 0}
      const response = await StockService.updateStock(item.item_id, uItem);
      const response1 = await ItemService.getItemById(response.data.item_id)
    if ( response.status == 200 ){
      alert("Stock URecives")
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
    <div className="item-details">
      <h1>Item Details</h1>
      <div className="detail-row">
        <span className="label">Item ID:</span>
        <span>{item.item_id}</span>
      </div>
      <div className="detail-row">
        <span className="label">Model:</span>
        <span>{item.model}</span>
      </div>
      <div className="detail-row">
        <span className="label">Company:</span>
        <span>{item.company}</span>
      </div>
      <div className="detail-row">
        <span className="label">Price:</span>
        <span>{item.price}</span>
      </div>
      <div className="detail-row">
        <span className="label">Current Stock:</span>
        <span>{item.item_stock.current}</span>
      </div>
      <div className="detail-row">
        <span className="label">Ordered Stock:</span>
        <span>{item.item_stock.ordered}</span>
      </div>
      <div className="detail-row">
        <span className="label">Delivere Stock:</span>
        <span>{item.item_stock.deliver}</span>
      </div>
      <div className="actions">
        <button className="btn btn-danger" onClick={() => {handleDelete(item.item_id)}}>
          Delete
        </button>
        <button  className="btn btn-secondary button" onClick={() => history('/item/update', {state: item})}>Edit Item</button>
        <button  className="btn btn-primary button" onClick={() => history('/stock/update', {state: item})}>Edit Stock</button>
        <button  className="btn btn-primary button" onClick={() => {handleRecive(item.item_id)}}>Recived</button>
      </div>
    </div>
  );
};

export default ItemDetails;
