import React, { useEffect, useState } from 'react';
import ItemService from '../Services/ItemService';
import style from './Items.css'
import { useNavigate } from 'react-router-dom';
import StockService from '../Services/StockService';
import BillService from '../Services/BillService';

const BillPage = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await BillService.getBills();
      console.log(response)
      if ( response.status == 200 ){
        setItems(response.data);
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (bill_id) => {
    try {
      const response = await BillService.deleteBill(bill_id);
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
        await BillService.deleteBillAll();
        alert("All Stock Clears");
        fetchItems();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container">
      <h1>Bills</h1>
      <div className="button-group">
        <button className="btn btn-danger" onClick={handleDeleteAll}>
          Delete All
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/bill/add')}>
          Add Bill
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Customer</th>
            <th>Mobile</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.bill_id}>
                <td>{item.bill_id}</td>
              <td>{item.customer}</td>
              <td>{item.mobile}</td>
              <td>{`${item.date[0]}-${item.date[1]}-${item.date[2]}`}</td>
              <td>{item.amount}</td>
              <td className='status'>{item.status==0 ? 'Pending' : 'Deliverd'}</td>
              <td className="actions">
                <button className="btn btn-primary button" onClick={() =>navigate('/bill/detail', {state: item.bill_id})}>Detail</button>
                {item.status == 1 && (
                  <>
                  <button className="btn btn-danger button" onClick={() => handleDelete(item.bill_id)}>
                  Delete
                  </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillPage;
