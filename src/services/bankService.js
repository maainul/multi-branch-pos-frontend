import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listBankAccounts = async () => {
  const response = await axios.get(API_ENDPOINTS.bankAccount.list);
  return response.data;
};

export const getBankAccountDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.bankAccount.show(id));
  return response.data;
};

export const createBankAccount = async (bankData) => {
  const response = await axios.post(API_ENDPOINTS.bankAccount.create, bankData);
  return response.data;
};

export const deleteBankAccount = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.bankAccount.delete(id));
  return response.data;
};

export const updateBankAccountService = async (id, updatedData) => {
  const response = await axios.put(
    API_ENDPOINTS.bankAccount.update(id),
    updatedData
  );
  return response.data;
};
