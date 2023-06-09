import React, { useEffect, useState } from 'react';
import ItemService from '../Services/ItemService';
import style from './Items.css'
import { useNavigate } from 'react-router-dom';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await ItemService.getItems();
      console.log(response)
      if ( response.status == 200 ){
        setItems(response.data);
      }
      else{
        console.log(response.error)
      }

      
// setItems([{item_id: 1,model:"Apple", company:"Apple", price:10000, item_stock:{current:50, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"Apple", price:10000, item_stock:{current:501, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"Apple", price:1000, item_stock:{current:502, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"Apple", price:10000, item_stock:{current:503, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"OnePlus", price:90000, item_stock:{current:540, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"Apple", price:140000, item_stock:{current:504, ordered:50, deliver:50}},
// {item_id: 1,model:"Apple", company:"Samsung", price:10000, item_stock:{current:550, ordered:50, deliver:50}}])
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await ItemService.deleteItem(itemId);
      if ( response.status == 200 ){
        alert(response.data)
        fetchItems();
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await ItemService.deleteItemAll();
      if ( response.status == 200 ){
        alert(response.data)
        fetchItems();
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container">
      <h1>Items</h1>
      <div className="button-group">
        <button className="btn btn-danger" onClick={handleDeleteAll}>
          Delete All
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/item/add')}>
          Add Item
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Model</th>
            <th>Company</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id}>
              <td>{item.item_id}</td>
              <td>{item.model}</td>
              <td>{item.company}</td>
              <td>${item.price}</td>
              <td className="actions">
                <button className="btn btn-danger button" onClick={() => handleDelete(item.item_id)}>
                  Delete
                </button>
                <button  className="btn btn-secondary button" onClick={() => navigate('/item/update', {state: item})}>Edit</button>
                <button className="btn btn-primary button" onClick={() =>navigate('/item/detail', {state: item})}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsPage;
