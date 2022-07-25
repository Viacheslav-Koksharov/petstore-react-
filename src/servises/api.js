import axios from "axios";

axios.defaults.baseURL = "https://petstore3.swagger.io/api/v3";

export const getOrder = (orderId) => {
  return axios.get(`/store/order/${orderId}`);
};

export const postOrder = (order) => {
  return axios.post("/store/order", order);
};

export const delOrder = (orderId) => {
  return axios.delete(`/store/order/${orderId}`);
};
