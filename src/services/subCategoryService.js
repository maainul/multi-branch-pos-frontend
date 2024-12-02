import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listSubCategories = async () => {
  const response = await axios.get(API_ENDPOINTS.subCategory.list);
  return response.data;
};

export const getSubCategoryDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.subCategory.show(id));
  return response.data;
};

export const createSubCategory = async (subCategoryData) => {
  const response = await axios.post(API_ENDPOINTS.subCategory.create, subCategoryData);
  return response.data;
};

export const deleteSubCategory = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.subCategory.delete(id));
  return response.data;
};
