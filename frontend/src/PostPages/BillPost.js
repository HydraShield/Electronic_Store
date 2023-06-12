import React, { useState } from 'react';
import style from './ItemPost.css'

const BillPost = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleItemChange = (itemId, quantity) => {
    const itemIndex = selectedItems.findIndex((item) => item.itemId === itemId);

    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, { itemId, quantity }]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems[itemIndex].quantity = quantity;
      setSelectedItems(updatedItems);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const billData = {
      name,
      mobile,
      items: selectedItems,
    };

    // Send billData to the API
    // You can use fetch or any other HTTP library to make the POST request
    fetch('/api/bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(billData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Create a Bill</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Mobile:
          <input type="text" value={mobile} onChange={handleMobileChange} />
        </label>
        <br />
        <h2>Items</h2>
        <ul>
          <li>
            <label>
              Item 1:
              <input
                type="number"
                value={
                  selectedItems.find((item) => item.itemId === 'item1')
                    ?.quantity || ''
                }
                onChange={(e) => handleItemChange('item1', e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              Item 2:
              <input
                type="number"
                value={
                  selectedItems.find((item) => item.itemId === 'item2')
                    ?.quantity || ''
                }
                onChange={(e) => handleItemChange('item2', e.target.value)}
              />
            </label>
          </li>
          {/* Add more items as needed */}
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BillPost;
