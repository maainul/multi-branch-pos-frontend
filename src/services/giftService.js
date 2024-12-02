import axios from "axios";
import API_ENDPOINTS from "./api/apiEndPoints";

export const listGifts = async () => {
  const response = await axios.get(API_ENDPOINTS.gift.list);
  return response.data;
};

export const getGiftDetails = async (id) => {
  const response = await axios.get(API_ENDPOINTS.gift.show(id));
  return response.data;
};

export const createGift = async (giftData) => {
  const response = await axios.post(
    API_ENDPOINTS.gift.create,
    giftData
  );
  return response.data;
};

export const deleteGift = async (id) => {
  const response = await axios.delete(API_ENDPOINTS.gift.delete(id));
  return response.data;
};
