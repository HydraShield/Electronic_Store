import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Item } from './BasicPages/Item';
import { Stock } from './BasicPages/Stock';
import { Order } from './BasicPages/Order';
import { Bill } from './BasicPages/Bill';
import { ItemPost } from './PostPages/ItemPost';
import { StockPost } from './PostPages/StockPost';
import { BillPost } from './PostPages/BillPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          {/* <Route path='/' element={<About />}></Route> */}
          <Route path='/items' element={<Item />}></Route>
          <Route path='/addItem' element={<ItemPost />}></Route>
          {/* <Route path='/item/detail' element={<ItemDetail />}></Route> */}
          <Route path='/orders' element={<Order />}></Route>
          {/* <Route path='/order/detail' element={<OrderDetail />}></Route> */}
          <Route path='/stocks' element={<Stock />}></Route>
          <Route path='/addStock' element={<StockPost />}></Route>
          {/* <Route path='/stocks/detail' element={<StockDetail />}></Route> */}
          <Route path='/bills' element={<Bill />}></Route>
          <Route path='/addBill' element={<BillPost />}></Route>
          {/* <Route path='/bill/detail' element={<BillDetail />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
