import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listSuppliers = async () => {
  const response = await axios.get(API_ENDPOINTS.supplier.list);
  return response.data;
};

export const getSupplierDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.supplier.show(id));
  return response.data;
};

export const createSupplier = async (supplierData) => {
  const response = await axios.post(
    API_ENDPOINTS.supplier.create,
    supplierData
  );
  return response.data;
};

export const deleteSupplier = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.supplier.delete(id));
  return response.data;
};
