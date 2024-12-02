import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listBanks = async () => {
  const response = await axios.get(API_ENDPOINTS.bankAccount.list);
  return response.data;
};

export const getBankDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.bankAccount.show(id));
  return response.data;
};

export const createBank = async (bankData) => {
  const response = await axios.post(API_ENDPOINTS.bankAccount.create, bankData);
  return response.data;
};

export const deleteBank = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.bankAccount.delete(id));
  return response.data;
};