import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listBranches = async () => {
  const response = await axios.get(API_ENDPOINTS.branches.list);
  return response.data;
};

export const getBranchDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.branches.show(id));
  return response.data;
};

export const createBranch = async (branchData) => {
  const response = await axios.post(API_ENDPOINTS.branches.create, branchData);
  return response.data;
};

export const deleteBranch = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.branches.delete(id));
  return response.data;
};

export const updateBranch = async (id, updatedData) => {
  const response = await axios.put(
    API_ENDPOINTS.branches.update(id),
    updatedData
  );
  return response.data;
};
