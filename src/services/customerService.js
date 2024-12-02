import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listCustomers = async () => {
  const response = await axios.get(API_ENDPOINTS.customer.list);
  return response.data;
};

export const getCustomerDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.customer.show(id));
  return response.data;
};

export const createCustomer = async (customerData) => {
  const response = await axios.post(
    API_ENDPOINTS.customer.create,
    customerData
  );
  return response.data;
};

export const deleteCustomer = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.customer.delete(id));
  return response.data;
};
