import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listExpenseTypes = async () => {
  const response = await axios.get(API_ENDPOINTS.expenseType.list);
  return response.data;
};

export const getExpenseTypeDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.expenseType.show(id));
  return response.data;
};

export const createExpenseType = async (expenseTypeData) => {
  const response = await axios.post(API_ENDPOINTS.expenseType.create, expenseTypeData);
  return response.data;
};

export const deleteExpenseType = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.expenseType.delete(id));
  return response.data;
};
