import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listCategories = async () => {
  const response = await axios.get(API_ENDPOINTS.category.list);
  return response.data;
};

export const getCategoryDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.category.show(id));
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await axios.post(
    API_ENDPOINTS.category.create,
    categoryData
  );
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.category.delete(id));
  return response.data;
};
