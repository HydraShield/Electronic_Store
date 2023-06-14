import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import ItemsPage from './BasicPages/ItemsPage';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemDetails from './DetailPages/ItemDetails';
import ItemUpdate from './Update/ItemUpdate';
import ItemPost from './PostPages/ItemPost';
import StockUpdate from './Update/StockUpdate';
import StockPage from './BasicPages/StockPage';
import BillPage from './BasicPages/BillPage';
import BillDetails from './DetailPages/BillDetails';
import BillPost from './PostPages/BillPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          {/* <Route path='/' element={<About />}></Route> */}
          <Route path='/items' element={<ItemsPage />}></Route>
          <Route path='/item/add' element={<ItemPost />}></Route>
          <Route path='/item/detail' element={<ItemDetails />}></Route>
          <Route path='/item/update' element={<ItemUpdate />}></Route>
          <Route path='/stocks' element={<StockPage />}></Route>
          <Route path='/stock/update' element={<StockUpdate />}></Route>
          <Route path='/bills' element={<BillPage />}></Route>
          <Route path='/bill/add' element={<BillPost />}></Route>
          <Route path='/bill/detail' element={<BillDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
