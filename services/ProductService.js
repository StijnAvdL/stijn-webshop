import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3030",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProducts(filters = []) {
    const query = getFilterQuery(filters);
    return apiClient.get(`/products?${query}`);
  },
  getProductPage(page = 1, filters = []) {
    const query = getFilterQuery(filters);
    return apiClient.get(`/products?${query}_page=${page}`);
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`);
  },
};

const getFilterQuery = (filters) => {
  let query = '';
  filters.forEach((filter) => (query += `category=${filter}&`));
  return query;
};
