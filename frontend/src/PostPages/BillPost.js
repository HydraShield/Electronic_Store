import React, { useState, useEffect } from 'react';
import BillService from '../Services/BillService';
import './BillPost.css';
import ItemService from '../Services/ItemService';
import { useNavigate } from 'react-router-dom';

const BillPost = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState();
  const [quantity, setQuantity] = useState(1);
  const [billItems, setBillItems] = useState([]);
  const [customer, setCustomer] = useState('');
  const [mobile, setMobile] = useState('');

  const history = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await ItemService.getItems();
      if (response.status === 200) {
        setItems(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleItemSelect = (itemId) => {
    const selectedItem = items.find((item) => item.item_id === itemId);
    setSelectedItems(selectedItem);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToBill = () => {
    if(parseInt(quantity) <= 0){
      alert("Number should be more than 0")
      return
    }
    const x = billItems.find((billItem) => billItem.item_id === selectedItems.item_id)
    console.log(x)
    if (x != null){
      if(parseInt(quantity) + x.quantity > selectedItems.item_stock.current){
        alert(`only ${selectedItems.item_stock.current - x.quantity} number of item left`)
        return;
      }
      x.quantity += parseInt(quantity)
      setBillItems((prevBillItems) => [...prevBillItems.filter((prevBillItem) => prevBillItem.item_id != x.item_id), x])
    }
    else{
      if(parseInt(quantity) > selectedItems.item_stock.current){
        alert(`only ${selectedItems.item_stock.current} number of item left`)
        return;
      }
      const newItem = {
        ...selectedItems,
        quantity: parseInt(quantity),
      };
      setBillItems(((prevBillItems) => [...prevBillItems, newItem]));
    }
    setBillItems(((prevBillItems) => prevBillItems.sort((a, b) => a.item_id-b.item_id)));
    
  };

  const handleItemRemove = (itemID) => {
    setBillItems(billItems.filter((items) => items.item_id != itemID))
  }

  const handleSubmitFinal = async () => {
    try {
      const itemX = billItems.reduce((acc, item) => {
        acc[item.item_id] = item.quantity;
        return acc;
      }, {});
      const newBill = {customer: customer, mobile: mobile, items: itemX}
      console.log(newBill)
      const response = await BillService.addBill(newBill);
      if (response.status === 200) {
        alert("Bill Added")
        window.location.reload()
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className='add-item'>
        <h1>New Bill</h1>
      <div className="form-group">
        <label>
          Customer:
          <input type="text" value={customer} onChange={(e) => {setCustomer(e.target.value)}} />
        </label>
      </div>
      <div className="form-group">
        <label>
          Mobile:
          <input type="mobile" value={mobile} onChange={(e) => {setMobile(e.target.value)}} />
        </label>
      </div>
      </div>
    <div className="bill-post-container">
      <div className="left-column">
        <h2>Available Items</h2>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Model</th>
              <th>Comapny</th>
              <th>Price</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.item_id} className={(selectedItems && (selectedItems.item_id===item.item_id)) ? 'selected' : ''}>
                <td>{item.item_id}</td>
                <td>{item.model}</td>
                <td>{item.company}</td>
                <td>${item.price}</td>
                <td>
                  <button className="select-btn" onClick={() => handleItemSelect(item.item_id)}>
                    Select
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-column">
        <div className='left-head'>
        <h2>Selected Items</h2>
        <div className='add-to-bill'>
        <button className="add-btn-2" onClick={() => {handleSubmitFinal()}}>
            Submit
          </button>
        </div>
        </div>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Model</th>
              <th>Company</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {billItems.map((item) => (
              <tr key={item.item_id}>
                <td>{item.item_id}</td>
                <td>{item.model}</td>
                <td>{item.company}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleItemRemove(item.item_id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="add-to-bill">
          <h2>Add to Bill</h2>
          <label>
            Quantity:
            <input type="number" className="quantity-input" value={quantity} onChange={handleQuantityChange} />
          </label>
          <button className="add-btn" onClick={handleAddToBill}>
            Add to Bill
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BillPost;
