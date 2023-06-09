import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend API URL

const ItemService = {
  getItems: () => axios.get(`${API_BASE_URL}/items`),
  getItemById: (itemId) => axios.get(`${API_BASE_URL}/item/${itemId}`),
  deleteItem: (itemId) => axios.delete(`${API_BASE_URL}/item/${itemId}`),
  deleteItemAll: () => axios.delete(`${API_BASE_URL}/items`),
  addItem: (item) => axios.post(`${API_BASE_URL}/item`, item),
  updateItem: (itemId, item) => axios.put(`${API_BASE_URL}/item/${itemId}`, item)
};

export default ItemService;
