import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listAssets = async () => {
  const response = await axios.get(API_ENDPOINTS.asset.list);
  return response.data;
};

export const getAssetDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.asset.show(id));
  return response.data;
};

export const createAsset = async (assetData) => {
  const response = await axios.post(API_ENDPOINTS.asset.create, assetData);
  return response.data;
};

export const deleteAsset = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.asset.delete(id));
  return response.data;
};
