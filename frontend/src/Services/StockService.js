import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend API URL

const StockService = {
  getStocks: () => axios.get(`${API_BASE_URL}/stocks`),
  getStockById: (itemId) => axios.get(`${API_BASE_URL}/stock/${itemId}`),
  deleteStock: (itemId) => axios.delete(`${API_BASE_URL}/stock/${itemId}`),
  deleteStockAll: () => axios.delete(`${API_BASE_URL}/stocks`),
  addStock: (stock) => axios.post(`${API_BASE_URL}/stock`, stock),
  updateStock: (itemId, stock) => axios.put(`${API_BASE_URL}/stock/${itemId}`, stock)
};

export default StockService;
