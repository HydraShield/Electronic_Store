import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from "./ItemDetails.css"
import BillService from '../Services/BillService';
import { wait } from '@testing-library/user-event/dist/utils';

const BillDetails = () => {
  const location = useLocation();
  const id = location.state;

  const [bill, setBill] = useState(null);

  const history = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await BillService.getBillById(id);
      console.log(response)
      if ( response.status == 200 ){
        const data = response.data
        setBill(data)
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await BillService.deleteBill(id);
      if ( response.status == 200 ){
        alert(response.data)
        history('/bills')
      }
      else{
        console.log(response.error)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelivered = async () => {
    try {
      const response = await BillService.updateBill(bill.bill_id);
      if ( response.status == 200 ){
        alert("Bill Updated")
        window.location.reload()
      }
      else{
        console.log(response.error)
      }
    }catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="item-details">
      <h1>Bill Details</h1>
      {bill && (
        <>
        <div className="detail-row">
        <span className="label">Bill ID:</span>
        <span>{bill.bill_id}</span>
      </div>
      <div className="detail-row">
        <span className="label">Customer:</span>
        <span>{bill.customer}</span>
      </div>
      <div className="detail-row">
        <span className="label">Mobile:</span>
        <span>{bill.mobile}</span>
      </div>
      <div className="detail-row">
        <span className="label">Date:</span>
        <span>{`${bill.date[0]}-${bill.date[1]}-${bill.date[2]}`}</span>
      </div>
      <div className="detail-row">
        <span className="label">Status:</span>
        <span>{bill.status==0 ? 'Pending' : 'Delivered'}</span>
      </div>
      <div className="item-list">
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Model</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {bill.items.map((itemx, index) => (
              <tr key={itemx.item_id}>
                <td>{itemx.item_id}</td>
                <td>{itemx.model}</td>
                <td>${itemx.price}</td>
                <td>{bill.quantity[index]}</td>
                <td>${itemx.price * bill.quantity[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="detail-row">
        <span className="label">Amount:</span>
        <span>{bill.amount}</span>
      </div>
      <div className="actions">
        {bill.status==0 ? (
          <>
          <button  className="btn btn-secondary button" onClick={() => {handleDelivered()}}>Delivered</button>
          </>
        ) : <>
           <button className="btn btn-danger" onClick={() => {handleDelete(bill.bill_id)}}>
          Delete
        </button>
        </>}
      </div>
      </>
      )}
    </div>
  );
};

export default BillDetails;
