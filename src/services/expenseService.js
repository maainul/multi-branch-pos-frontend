import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listExpenses = async () => {
  const response = await axios.get(API_ENDPOINTS.expense.list);
  return response.data;
};

export const getExpenseDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.expense.show(id));
  return response.data;
};

export const createExpense = async (expenseData) => {
  const response = await axios.post(
    API_ENDPOINTS.expense.create,
    expenseData
  );
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.expense.delete(id));
  return response.data;
};
