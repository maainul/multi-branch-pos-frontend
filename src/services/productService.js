import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listProducts = async () => {
  const response = await axios.get(API_ENDPOINTS.product.list);
  return response.data;
};

export const getProductDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.product.show(id));
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await axios.post(API_ENDPOINTS.product.create, productData);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.product.delete(id));
  return response.data;
};
