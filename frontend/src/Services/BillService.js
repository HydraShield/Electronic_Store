import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend API URL

const BillService = {
  getBills: () => axios.get(`${API_BASE_URL}/bills`),
  getBillById: (bill_id) => axios.get(`${API_BASE_URL}/bill/${bill_id}`),
  deleteBill: (bill_id) => axios.delete(`${API_BASE_URL}/bill/${bill_id}`),
  deleteBillAll: () => axios.delete(`${API_BASE_URL}/bills`),
  addBill: (bill) => axios.post(`${API_BASE_URL}/bill`, bill),
  updateBill: (id) => axios.put((`${API_BASE_URL}/bill/${id}`))
};

export default BillService;
